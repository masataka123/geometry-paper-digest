---
layout: paper
title: "Deformation invariance of canonical nefness in smooth Kahler morphisms"
title_ja: "滑らかなKähler射における標準束のnef性の変形不変性"
authors: "Mu-Lin Li, Xiao-Lei Liu, Sheng Rao"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $f\colon X\to\Delta$ be a smooth K\"ahler morphism from complex manifold $X$ to the unit disc. We prove that the canonical bundle $K_{X_t}$ is nef for \emph{every} fiber as soon as it is nef for \emph{one} fiber. This answers, in arbitrary dimension and in the K\"ahler setting, the deformation-openness problem for non-nefness of the canonical bundle raised by Campana and Peternell.
topic: algebraic-geometry
tags:
  - positivity
  - birational-geometry
arxiv_id: "2609.14435v1"
arxiv_url: "https://arxiv.org/abs/2609.14435"
arxiv_submitted: "2026-09-13"
arxiv_updated: "2026-09-13"
summary: >-
  単位円板上の滑らかなKähler射で、一つのファイバーの標準束がnefなら全ファイバーでnefであることを任意次元で証明する。超越的nef閾値、収縮、極小有理曲線の変形を組み合わせ、Campana--Peternellの標準束非nef性の開性問題を解決する。
abstract_en: >-
  Let $f\colon X\to\Delta$ be a smooth K\"ahler morphism from complex manifold $X$ to the unit disc. We prove that the canonical bundle $K_{X_t}$ is nef for \emph{every} fiber as soon as it is nef for \emph{one} fiber. This answers, in arbitrary dimension and in the K\"ahler setting, the deformation-openness problem for non-nefness of the canonical bundle raised by Campana and Peternell.
summary_en: ""
abstract_ja: >-
  複素多様体$X$から単位円板$\Delta$への滑らかなKähler射$f\colon X\to\Delta$を考える。ある一つのファイバーで標準束$K_{X_t}$がnefなら、すべてのファイバーでnefであることを証明する。これはCampanaとPeternellが提起した標準束の非nef性の変形開性問題を、任意次元のKähler設定で解決する結果である。
abstract_source_url: "https://arxiv.org/abs/2609.14435"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.14435](https://arxiv.org/abs/2609.14435)
- **著者:** Mu-Lin Li, Xiao-Lei Liu, Sheng Rao
- **初回投稿日:** 2026年9月13日
- **最終更新日:** 2026年9月13日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Kähler多様体の族$f:X\to\Delta$において、標準束のnef性がファイバー間で保たれるかを問う。Campana--Peternellは、中心ファイバーの標準束が非nefなら近傍でも非nefかという問題を、Kähler Mori理論の基本問題として提示した。

主定理はより強く、一つでも標準束がnefなファイバーがあれば、族のすべてのファイバーでnefであると述べる。射影的な族や低次元、収縮の型に関する従来の制約を同時に除き、任意相対次元の滑らかなKähler射を扱う。

証明は、非nefなファイバーに超越的nef境界類を作って射影的収縮を得る一方、別のnefファイバーを使ってHard Lefschetz型の制約を移す。さらに極小有理曲線の変形をBarlet空間で元のファイバー内に閉じ込め、次元評価の矛盾を導く。

## 背景と問題設定

$X_t=f^{-1}(t)$とする。問題は、ある$t_*$で$K_{X_{t_*}}$がnefであるとき、別のファイバーで非nefになり得るかというものである。射影的な滑らかな族ではWiśniewskiらの結果があり、Kähler族でも三次元の場合などは知られていたが、任意次元の非射影的状況では未解決であった。

滑らかな固有射$f$がKähler射であるとは、局所ポテンシャルの差が正則関数の実部となり、相対接束上で正となる閉実$(1,1)$形式を持つことをいう。

## 主結果

### 標準束nef性の全ファイバー不変性（Theorem 1.2）

滑らかなKähler射$f:X\to\Delta$について、ある$t_*\in\Delta$で$K_{X_{t_*}}$がnefなら、すべての$t\in\Delta$で$K_{X_t}$がnefである。同値に

$$
N(f):=\{t\in\Delta:K_{X_t}\text{ is nef}\}
$$

は空集合または$\Delta$全体である。

### 全空間がKählerの場合（Theorem 1.3）

$f:X\to\Delta$がKähler多様体からの滑らかな固有全射なら、同じ結論が成り立つ。比較的コンパクトな部分円板の逆像がKählerであるため、Theorem 1.2はこの場合へ帰着される。

## 証明の見取り図

反対に、$M=X_0$で$K_M$が非nef、別のファイバーでnefと仮定する。Kähler形式$\omega$に対し

$$
\alpha_0=c_1(K_M)+\tau[\omega_0]
$$

がnefだがKählerでない閾値$\tau>0$を取る。同じ平坦コホモロジー類がnefファイバーではKählerになることから、$M$上にLefschetz同型を得る。超越的base-point-free定理は$\alpha_0=g^*\beta$となる非自明な射影的収縮$g:M\to Y$を与え、任意の既約コンパクト解析部分空間$Z$に

$$
2\dim Z-\dim g(Z)\leq n
$$

という制約を課す。

次に、反標準次数が最小の$g$収縮有理曲線を取り、Gromovコンパクト性と再パラメータ化作用の固有性から普遍$\mathbb P^1$族を持つコンパクト解析的モジュライを作る。相対Barlet空間により負次数曲線の変形全体を$M$内へ閉じ込める一方、全空間$X$で先に変形次元を評価することで余分な一次元を保持する。最終的に$\ell>0$に対し

$$
n+\ell\leq r+2\leq2d-e\leq n
$$

となり矛盾する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.14435](https://arxiv.org/abs/2609.14435)
- **Introduction:** Section 1, pp. 1--4
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.3
- **論文構成の説明:** p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
