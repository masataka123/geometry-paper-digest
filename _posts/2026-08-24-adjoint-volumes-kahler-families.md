---
layout: paper
title: "On Pseudo-Effectivity and Volumes of Adjoint Classes in Kähler Families with Projective Central Fiber"
title_ja: "射影的中心ファイバーをもつKähler族における随伴類の擬有効性と体積"
authors: "Christopher D. Hacon, Yi Li, Sheng Rao"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  This paper is devoted to studying the deformation behavior of pseudo-effective canonical divisors and volumes of adjoint classes in Kähler families. Based on recent developments in the Kähler minimal model program, for flat families with fiberwise canonical singularities, we establish the global stability of the pseudo-effectivity of canonical divisors and uniruledness, assuming in addition that one fiber is projective, while the same conclusion for Kähler threefolds is also true without the projectivity assumption of the central fiber. For a smooth Kähler family whose central fiber is projective with a big adjoint class, we show that its volume remains locally constant. Finally, using the (relative) minimal model program for Kähler threefolds, we verify the deformation invariance of volumes of adjoint classes and plurigenera for smooth families of Kähler threefolds, thereby confirming Siu's invariance of plurigenera conjecture in dimension three.
topic: algebraic-geometry
tags:
  - minimal-model-program
  - positivity
arxiv_id: "2602.04158v2"
arxiv_url: "https://arxiv.org/abs/2602.04158"
arxiv_submitted: "2026-02-04"
arxiv_updated: "2026-03-05"
summary: >-
  Kähler族で標準因子の擬有効性、非有理曲線充填性、随伴類の体積が変形によりどう振る舞うかを調べる。標準特異点をもつ族では一つのファイバーの射影性から擬有効性の大域的一定性を導き、滑らかなKähler三次元族では随伴類の体積と多重種数の変形不変性を示す。
abstract_en: >-
  This paper is devoted to studying the deformation behavior of pseudo-effective canonical divisors and volumes of adjoint classes in Kähler families. Based on recent developments in the Kähler minimal model program, for flat families with fiberwise canonical singularities, we establish the global stability of the pseudo-effectivity of canonical divisors and uniruledness, assuming in addition that one fiber is projective, while the same conclusion for Kähler threefolds is also true without the projectivity assumption of the central fiber. For a smooth Kähler family whose central fiber is projective with a big adjoint class, we show that its volume remains locally constant. Finally, using the (relative) minimal model program for Kähler threefolds, we verify the deformation invariance of volumes of adjoint classes and plurigenera for smooth families of Kähler threefolds, thereby confirming Siu's invariance of plurigenera conjecture in dimension three.
summary_en: ""
abstract_ja: >-
  Kähler族における擬有効標準因子と随伴類の体積の変形挙動を研究する。標準特異点をもつ平坦族について、一つのファイバーが射影的なら標準因子の擬有効性と非有理曲線充填性が族全体で安定であることを示す。射影的中心ファイバー上の随伴類がbigである滑らかな族では、その体積は局所的に一定となる。さらにKähler三次元多様体の族では、随伴類の体積と多重種数の変形不変性を得る。
abstract_source_url: "https://arxiv.org/abs/2602.04158"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.04158](https://arxiv.org/abs/2602.04158)
- **著者:** Christopher D. Hacon, Yi Li, Sheng Rao
- **初回投稿日:** 2026年2月4日
- **最終更新日:** 2026年3月5日（v2）
- **主分類・副分類:** math.AG, math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

分類理論で用いる多重種数、体積、標準因子の擬有効性がKähler族の中で変わるかを扱う。射影族では代数的方法や $L^2$ 拡張による結果が蓄積している一方、超越的なKähler類には同じ手法を直接適用できない。

第一の結果は、標準特異点をもつ曲線上のKähler族で一つのファイバーが射影的なら、標準因子の擬有効性が全ファイバーで一致するという大域的安定性である。非有理曲線充填性についても同値な安定性を得る。

第二の結果群は随伴類の体積を扱う。射影的中心ファイバー上で随伴類がbigとなる適切な一般化対について局所一定性を示し、Kähler三次元多様体の滑らかな族では射影性の追加仮定なしに体積と多重種数の不変性を導く。

## 背景と問題設定

滑らかな射影族の多重種数の変形不変性はSiuらの仕事で知られるが、滑らかなコンパクトKähler族に対する同じ主張は一般には予想である。本論文は解析的MMPの進展を用い、超越的な随伴類を境界因子に近い形で扱う。

## 主結果

### 擬有効性の大域的安定性（Theorem 1.2 / Theorem 5.4）

$f:X\to S$ をKähler多様体から滑らかで連結な相対コンパクト曲線への族とし、$X_0$ は射影的、全ての $X_t$ は標準特異点をもつとする。このとき $K_{X_0}$ が擬有効であることと、全ての $t\ne0$ について $K_{X_t}$ が擬有効であることは同値である。対応して、$X_0$ が非有理曲線充填的であることと全ての $X_t$ がそうであることも同値となる（Corollary 1.3）。

### 随伴類の体積の局所一定性（Theorem 1.6 / Theorem 6.1）

滑らかなKähler族と一般化Kähler対 $(X,B+\beta)$ を考える。中心ファイバー上の

$$
K_{X_0}+B_0+\beta_{X_0}+\delta\omega_{X_0}
$$

がbigで、対応する対が射影的かつ標準特異点をもち、Introductionに列挙された丸めと負部分に関する条件を満たすなら、ある $0$ のEuclid近傍で

$$
t\longmapsto \operatorname{vol}(K_{X_t}+B_t+\beta_{X_t}+\delta\omega_{X_t})
$$

は一定である。

### Kähler三次元族（Theorem 1.8 / Theorem 6.5）

滑らかなコンパクトKähler三次元多様体の曲線上の族では、任意の $m\ge1$ に対して $P_m(X_t)$ は $t$ に依存しない。さらに全空間上のKähler類 $\omega_X$ があれば、任意の $\delta\ge0$ について

$$
t\longmapsto \operatorname{vol}(K_{X_t}+\delta\omega_{X_t})
$$

も一定である。これはSiuの多重種数不変性予想を三次元で確認する結果である。

## 証明の見取り図

中心ファイバー上で解析的MMPを走らせ、Kollár型の拡張法によりその操作を近傍ファイバーへ延長する。超越的base point free定理が、中心ファイバーでの停止から近傍での停止を保証する。体積についてはMMP後の随伴類をnefにし、体積を最高次交点数で表す。特異性が余次元2の集合に集中することを利用して特異Stokes公式を適用し、その交点数の一定性を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2602.04158](https://arxiv.org/abs/2602.04158)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.6, 1.7, 1.8; Corollary 1.3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
