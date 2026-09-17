---
layout: paper
title: "Nonlinear Bochner-Kodaira-Nakano identity and nonlinear Hodge correspondence for morphisms"
title_ja: "非線形Bochner–Kodaira–Nakano恒等式と写像の非線形Hodge対応"
authors: "Nianzi Li, Mao Sheng"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
arxiv_abstract: >-
  We establish a nonlinear Bochner-Kodaira-Nakano identity for sections of complex fiber bundles. As applications, we obtain a nonlinear Bochner-type vanishing theorem for holomorphic sections and a generalization of Yau's Schwarz lemma. After incorporating a nonlinear Higgs field, we derive the $D'$-$D''$ and $D^c$-$D$ identities. Under natural Hamiltonian and compactness assumptions, these identities imply that a section of a nonlinear harmonic bundle is flat if and only if it is a Higgs section with vanishing degree. We extend this correspondence first to sub-fibrations and then, via the graph construction, to morphisms.
topic: differential-geometry
tags:
  - higgs-nonabelian-hodge
  - vector-bundles-sheaves
  - curvature
arxiv_id: "2607.13450v2"
arxiv_url: "https://arxiv.org/abs/2607.13450"
arxiv_submitted: "2026-07-15"
arxiv_updated: "2026-09-15"
summary: >-
  ベクトル束を複素ファイバー束へ置き換え、切断に対する非線形Bochner–Kodaira–Nakano恒等式を構築する。Hamiltonian性とコンパクト性の下で、次数ゼロのHiggs切断と平坦切断の対応を示し、部分ファイブレーションと写像へ拡張する。
abstract_en: ""
summary_en: >-
  The authors develop differential identities for sections of complex fiber bundles that extend familiar Kähler identities beyond the linear vector-bundle setting. These formulas yield a vanishing theorem and a Schwarz-lemma-type estimate. After adding nonlinear Higgs data, the paper characterizes flat sections by the Higgs condition together with a degree constraint, and transports the result to sub-fibrations and morphisms using their graphs.
abstract_ja: >-
  複素ファイバー束の切断に対する非線形Bochner–Kodaira–Nakano恒等式を確立し、正則切断の消滅定理とYauのSchwarz補題の一般化を導く。非線形Higgs場を組み込むと、適切なHamiltonian性とコンパクト性の仮定の下で、平坦切断が次数ゼロのHiggs切断として特徴づけられる。この対応を部分ファイブレーション、さらにグラフ構成を介して写像へ拡張する。
abstract_source_url: "https://arxiv.org/abs/2607.13450"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.13450](https://arxiv.org/abs/2607.13450)
- **著者:** Nianzi Li, Mao Sheng
- **初回投稿日:** 2026年7月15日
- **最終更新日:** 2026年9月15日
- **主分類・副分類:** math.DG（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

通常の非可換Hodge対応は平坦ベクトル束とpolystable Higgs束を結ぶ。本論文は線形空間をファイバーにもつという条件を外し、複素ファイバー束の切断、部分ファイブレーション、写像に対応を拡張する。

まずEhresmann接続とファイバー方向Kähler計量を用いて切断の微分計算を整備し、非線形Bochner–Kodaira–Nakano恒等式を得る。これから正則切断の消滅と、YauのSchwarz補題を含む曲率評価が従う。

非線形Higgs場を加えた調和束では、Higgs切断が平坦になるための追加条件として次数ゼロが現れる。ベクトル束の場合には自動的だった条件が、非線形の場合には実質的な障害となる点が新しい。

## 背景と問題設定

$f:X\to S$ を複素ファイバー束、$u:S\to X$ を切断とする。ファイバー方向微分を $\partial u,\bar\partial u$ に分け、相対Kähler形式 $\omega_{X/S}$ と接続から全空間上の形式 $\omega_X$ を作る。線形束の内積計算を、切断そのもののエネルギー恒等式へ置き換えることが問題である。

## 主結果

### 非線形Bochner–Kodaira–Nakano恒等式（Theorem 1.1）

Hermitian基底 $(S,\omega_S)$ 上で、任意の滑らかな切断は

$$
|\partial u|^2-|\bar\partial u|^2
=\Lambda_{\omega_S}\bigl(u^*\omega_X-u^*\omega_X^H\bigr)
$$

を満たす。$S$ がコンパクトなら積分版が次数を介して両エネルギー差を表す。この恒等式から非線形消滅定理とSchwarz補題型評価が導かれる。

### Higgs–平坦対応（Corollary 1.9）

Hamiltonian作用、平行なcomoment map、閉形式などIntroductionに列挙された仮定の下で、コンパクトsemi-Kähler基底上の非線形調和束の切断 $u$ について

$$
u\text{ が平坦}\quad\Longleftrightarrow\quad
u\text{ がHiggs切断かつ }\deg_{\omega_X,\zeta}(u)=0
$$

が成り立つ。

### 部分ファイブレーションと写像（Theorems 1.11, 1.12）

対応は適切な合成次数がゼロのHiggs部分ファイブレーションへ拡張される。写像 $F:X_1\to X_2$ を積ファイブレーション内のグラフとみなすことで、次数ゼロのHiggs写像とファイバー方向正則な平坦写像の対応を得る。

## 証明の見取り図

切断に沿う垂直接束上へ接続を線形化し、二階微分から非線形曲率を回収する。Higgs場を加えた後は $D'$–$D''$ および $D^c$–$D$ 恒等式を導き、コンパクト基底上で完全微分項を積分消去する。部分ファイブレーションでは法方向成分を測る次数を導入し、写像の場合はグラフへ同じ議論を適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.13450](https://arxiv.org/abs/2607.13450)
- **Introduction:** Section 1, pp. 2–8
- **主要結果:** Theorems 1.1–1.3, Corollary 1.9, Theorems 1.11–1.13
- **確認したarXivバージョン:** v2
- **source_scope:** Abstract and Introduction
