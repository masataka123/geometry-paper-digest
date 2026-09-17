---
layout: paper
title: "Deformations of Canonical Bundle for Smooth Weakly Kähler Morphisms"
title_ja: "滑らかな弱Kähler射における標準束の変形"
authors: "Liqingjing Wang"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let π: \mathcal X \rightarrow Δbe a smooth proper family of compact complex manifolds such that the central fiber \mathcal X_0 is Kähler. Then all the fibers close to 0 are Kähler and π is a weakly Kähler morphism, even if \mathcal X is not a Kähler space. In this paper we show that if dim \mathcal X_0 = 4 and K_{\mathcal X_0} is nef, then K_{\mathcal X_t} is nef for all t in a neighborhood of the origin.
topic: algebraic-geometry
tags:
  - positivity
  - moduli
  - minimal-model-program
arxiv_id: "2609.18507v1"
arxiv_url: "https://arxiv.org/abs/2609.18507"
arxiv_submitted: "2026-09-16"
arxiv_updated: "2026-09-16"
summary: >-
  コンパクトKähler四次元多様体の変形族において、中心ファイバーの標準束がnefなら近傍の全ファイバーでもnefであることを示す。全空間がKählerであるとは仮定せず、Kähler四次元MMPの収縮理論を用いて標準束負の有理曲線の変形を制御する点が特徴である。
abstract_en: ""
summary_en: >-
  The paper studies whether nefness of the canonical bundle persists in a deformation of a compact Kähler manifold. It proves this persistence for four-dimensional central fibers, without requiring the total space of the family to be Kähler. The argument analyzes deforming canonical-negative rational curves through contraction theory for compact Kähler fourfolds.
abstract_ja: >-
  中心ファイバーがKählerであるコンパクト複素多様体の滑らかな固有族を考える。中心ファイバーが四次元で標準束がnefなら、原点近傍のすべてのファイバーの標準束もnefとなる。このとき全空間自体がKähler空間である必要はなく、射は弱Kähler射として扱われる。
abstract_source_url: "https://arxiv.org/abs/2609.18507"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.18507](https://arxiv.org/abs/2609.18507)
- **著者:** Liqingjing Wang
- **初回投稿日:** 2026年9月16日
- **最終更新日:** 2026年9月16日
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

単位円板上の固有正則submersion $\pi:\mathcal X\to\Delta$ を考える。中心ファイバー $X_0$ がKählerで標準束 $K_{X_0}$ がnefであるとき、このnef性が近傍のファイバーに保存されるかが問題である。

射が射影的な場合には任意次元で肯定的な結果がある一方、実 $(1,1)$-類が連続的に変化するKähler設定にはその議論を直接移せない。三次元以下ではKähler MMPによる結果が知られており、本論文は四次元へ進める。

主結果は、$\dim X_0=4$ なら $K_{X_0}$ のnef性が十分小さい全ファイバーへ保存されるというものである。全空間 $\mathcal X$ のKähler性は要求されず、弱Kähler射というより広い状況を扱う。

## 背景と問題設定

反例を導くには、近傍ファイバー $X_t$ 上に $K_{X_t}$-負の有理曲線が現れる仕組みを理解する必要がある。本論文はコンパクトKähler四次元多様体の収縮定理を使い、そのような曲線を含む極端収縮の例外集合が族とともにどう変形するかを調べる。

## 主結果

### nef性の変形不変性（Theorem 1.1）

$X_0$ を標準束 $K_{X_0}$ がnefである四次元コンパクトKähler多様体とし、$\pi:\mathcal X\to\Delta$ をその変形とする。このとき原点の十分小さい近傍 $\Delta'\subset\Delta$ が存在し、すべての $t\in\Delta'$ に対して $K_{X_t}$ はnefである。

### 技術的変形定理（Theorem 1.2）

十分小さい $t$ について $K_{X_t}$ がpseudo-effectiveだがnefでないと仮定する。このとき部分多様体 $F\subset X_t$ が存在し、$-K_{X_t}|_F$ はampleで、しかも $F$ は $X_t$ とともに変形する。中心ファイバーのnef性と両立しないこの変形挙動がTheorem 1.1を導く。

## 証明の見取り図

Introductionによれば、核となるのはコンパクトKähler四次元多様体の収縮定理である。$K$-負の極端収縮の例外集合を具体的に記述し、負の有理曲線を含む部分多様体 $F$ が族の中で変形することを示す。これを中心ファイバーまで追跡し、$K_{X_0}$ がnefであるという仮定との矛盾を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.18507](https://arxiv.org/abs/2609.18507)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Theorem 1.2
- **論文構成の説明:** p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
