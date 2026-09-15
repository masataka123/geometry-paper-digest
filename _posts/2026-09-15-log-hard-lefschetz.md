---
layout: paper
title: "Hard Lefschetz theorem for logarithmic sheaves twisted by pseudo-effective line bundles"
title_ja: "擬有効直線束で捻った対数的層のHard Lefschetz定理"
authors: "Yuta Watanabe"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  In this paper, a Hard Lefschetz theorem for logarithmic sheaves twisted by pseudo-effective line bundles is established, extending a theorem of Demailly, Peternell, and Schneider.
topic: several-complex-variables
tags:
  - positivity
  - vector-bundles-sheaves
  - l2-methods
  - multiplier-ideals-extension
arxiv_id: "2609.14175v1"
arxiv_url: "https://arxiv.org/abs/2609.14175"
arxiv_submitted: "2026-09-12"
arxiv_updated: "2026-09-12"
summary: >-
  擬有効直線束に対するDemailly--Peternell--SchneiderのHard Lefschetz定理を、単純正規交差因子に沿う対数微分形式へ拡張する。Poincaré型計量と乗数イデアルを組み込み、接束または因子直線束の正値性仮定の下で楔積写像の全射性を証明する。
abstract_en: ""
summary_en: >-
  This work extends a Hard Lefschetz theorem for pseudo-effective line bundles to logarithmic differential forms on a compact Kähler manifold. Under positivity assumptions along a simple normal crossing divisor, wedge multiplication by a Poincaré-type Kähler form gives a surjective cohomological map involving the multiplier ideal of a singular Hermitian metric. A regularization adapted to the logarithmic L2 resolution is used to retain control near the divisor.
abstract_ja: >-
  擬有効直線束で捻った対数的層に対するHard Lefschetz定理を確立し、Demailly、Peternell、Schneiderの定理を拡張する。
abstract_source_url: "https://arxiv.org/abs/2609.14175"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.14175](https://arxiv.org/abs/2609.14175)
- **著者:** Yuta Watanabe
- **初回投稿日:** 2026年9月12日
- **最終更新日:** 2026年9月12日
- **主分類・副分類:** math.CV（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

擬有効直線束は半正な曲率カレントをもつ特異Hermitian計量によって特徴づけられ、その特異性は乗数イデアル層に記録される。Demailly--Peternell--SchneiderのHard Lefschetz定理は、この乗数イデアルを含むコホモロジー写像の全射性を与える。

本論文はこの定理を、単純正規交差因子 $D$ に沿う対数微分形式へ拡張する。$X\setminus D$ 上のPoincaré型Kähler計量を用いるため、境界付近の解析と特異Hermitian計量の近似を両立させる必要がある。

主定理は、$T_X$ が $D$ 上でGriffiths半正という仮定、または各 $\mathcal O_X(D_j)$ の半正性という仮定の下で、対数的Hard Lefschetz写像が全射になることを示す。乗数イデアルを単に $\mathcal O_X$ へ置き換えると全射性が破れる例も提示され、その役割が本質的であることが強調される。

## 背景と問題設定

非対数的な既知定理では、コンパクトKähler多様体 $X$、擬有効直線束 $(L,h)$、Kähler形式 $\omega$ に対し、$\omega^q$ との楔積が $L\otimes\mathcal I(h)$ を係数とする写像を与える。本論文では $\Omega_X^\bullet$ を $\Omega_X^\bullet(\log D)$ に置き換え、$D$ に沿ってPoincaré型となる完備計量の下で同様の全射性を問う。

## 主結果

### 対数的Hard Lefschetz定理（Theorem 1.2）

$X$ を次元 $n$ のコンパクトKähler多様体、$D=\sum_{j=1}^J D_j$ を単純正規交差因子、$\omega_P$ を $X\setminus D$ 上で $D$ に沿ってPoincaré型の滑らかなKähler計量とする。擬有効直線束 $L$ が半正曲率カレントをもつ特異Hermitian計量 $h$ を備え、$T_X$ が $D$ 上でGriffiths半正なら、各 $q\geq0$ に対して

$$
\Phi^q_{\omega_P,h}:H^0\!\left(X,\Omega_X^{n-q}(\log D)\otimes L\otimes\mathcal I(h)\right)
\longrightarrow
H^q\!\left(X,\Omega_X^n(\log D)\otimes L\otimes\mathcal I(h)\right)
$$

は全射である。写像は $\omega_P^q$ との楔積から誘導される。

### 因子直線束の半正性による全射性（Theorem 1.3）

Theorem 1.2と同じ設定で、各 $\mathcal O_X(D_j)$ が半正なら、同じ写像 $\Phi^q_{\omega_P,h}$ は全射である。Introductionは、単なる nef 性まで仮定を弱められるかをProblem 1.4として残している。

## 証明の見取り図

最近確立された解析的な対数的 $L^2$-Dolbeault resolutionを用いる。ただしresolutionには特定の特異Hermitian計量が必要で、通常の近似で $L^2$ 弱極限を取ると制御が失われる。そこでKähler計量に関して対称な核と指数写像を使うDemaillyの畳み込み型正則化を適用し、$h$ へ単調に近づきながらresolutionを保つ計量列を構成する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.14175](https://arxiv.org/abs/2609.14175)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.3; Problem 1.4
- **論文構成の説明:** Introduction, pp. 1–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
