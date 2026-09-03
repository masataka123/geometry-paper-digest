---
layout: paper
title: "Transcendental Okounkov bodies"
title_ja: "超越的Okounkov体"
authors: "Tamás Darvas, Rémi Reboulet, David Witt Nyström, Mingchen Xia, Kewei Zhang"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.CV
arxiv_abstract: >-
  We show that the volume of transcendental big $(1,1)$-classes on compact Kähler manifolds can be realized by convex bodies, thus answering questions of Lazarsfeld-Mustaţă and Deng. In our approach we use an approximation process by partial Okounkov bodies together with properties of the restricted volume, and we study the extension of Kähler currents, as well as the bimeromorphic behavior of currents with analytic singularities. We also establish a connection between transcendental Okounkov bodies and toric degenerations.
topic: differential-geometry
tags:
  - positivity
  - pluripotential-theory
  - toric-geometry
arxiv_id: "2309.07584v3"
arxiv_url: "https://arxiv.org/abs/2309.07584"
arxiv_submitted: "2023-09-14"
arxiv_updated: "2026-01-05"
summary: >-
  コンパクトKähler多様体上の超越的大 $(1,1)$-類にDengのOkounkov体を対応させ、そのEuclid体積が類の体積を回復することを全次元で証明する。部分Okounkov体による近似、Kähler currentの拡張、解析的特異点の双有理的挙動を用い、反復トーリック退化から得るmoment bodyとの一致も示す。
abstract_en: ""
summary_en: >-
  This work proves that a big transcendental $(1,1)$-class on a compact Kähler manifold has an Okounkov body whose Euclidean volume recovers the class volume. The result settles the expected volume identity in arbitrary dimension and extends to pseudoeffective classes by passage to the boundary. The proof combines partial Okounkov bodies, restricted volumes, and extension of Kähler currents. A second construction via iterated toric degenerations produces the same convex body.
abstract_ja: >-
  コンパクトKähler多様体上の超越的大 $(1,1)$-類の体積を凸体として実現する。部分Okounkov体による近似と制限体積を使い、Kähler currentの拡張および解析的特異点をもつcurrentの双有理的挙動を調べる。さらに超越的Okounkov体とトーリック退化から得られるmoment bodyの一致を確立する。
abstract_source_url: "https://arxiv.org/abs/2309.07584"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2309.07584](https://arxiv.org/abs/2309.07584)
- **著者:** Tamás Darvas, Rémi Reboulet, David Witt Nyström, Mingchen Xia, Kewei Zhang
- **初回投稿日:** 2023年9月14日
- **最終更新日:** 2026年1月5日
- **主分類・副分類:** math.DG（主分類）, math.AG, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

代数幾何のOkounkov体は、線束の切断の消滅次数を凸体へ符号化し、そのEuclid体積から線束の体積を回復する。第一Chern類が線束に由来しない超越的 $(1,1)$-類では切断が使えないため、Dengは正currentのLelong数で代替する構成を提案した。

Dengの体積公式は複素次元2以下で知られていた。本論文は任意次元のコンパクトKähler多様体と任意の大類について公式を証明し、擬有効類にも極限で拡張する。

証明は部分Okounkov体で体積を近似し、双有理変換でKählerの場合へ還元する。切片の体積と制限体積を結ぶため、部分多様体上のKähler currentを周囲へ延長する定理も確立する。

さらにcurrentを反復トーリック退化して得るmoment bodyを導入し、それがDengのOkounkov体と一致することを示す。超越的な凸体をトーリック模型で任意精度に近似できるという幾何的解釈が得られる。

## 背景と問題設定

$X$ を $n$ 次元コンパクトKähler多様体、$\xi$ を大 $(1,1)$-類、$Y_\bullet$ を完全旗とする。解析的特異点をもつ正currentへ、旗に沿うLelong数を反復して付値ベクトルを対応させ、その集合の閉包を $\Delta_{Y_\bullet}(\xi)$ とする。問われる体積公式は

$$
\operatorname{vol}_{\mathbb R^n}\!\left(\Delta_{Y_\bullet}(\xi)\right)
=\frac{1}{n!}\operatorname{vol}(\xi)
$$

である。

## 主結果

### 超越的体積公式（Theorem 1.1, Corollary 1.2）

任意の大類 $\xi$ と旗 $Y_\bullet$ に対して

$$
\operatorname{vol}_{\mathbb R^n}(\Delta(\xi))=\frac1{n!}\operatorname{vol}(\xi)
$$

が成立する。極限を取れば同じ等式は擬有効類にも成り立つ。これはLazarsfeld–Mustaţăの問いとDengの予想に肯定的に答える。

### Kähler currentの拡張（Theorem 1.3）

$V\subset X$ を正次元の連結コンパクト複素部分多様体とし、$T=\omega|_V+dd^c\varphi$ をKähler currentとする。$e^\varphi$ がHölder連続なら、$T$ は $\widetilde T=\omega+dd^c\widetilde\varphi$ へ延長でき、$e^{\widetilde\varphi}$ もHölder連続となる。$\varphi$ が解析的特異点をもつなら延長も同じ性質を保つ。

### トーリック退化との一致（Theorem 1.4）

大類 $\xi$ に対し、反復トーリック退化のmoment bodyの合併の閉包として定めた $\Delta_\mu(\xi)$ は

$$
\Delta_\mu(\xi)=\Delta(\xi)
$$

を満たす。従ってOkounkov体はトーリック退化に付随するmoment bodyでHausdorff距離について任意に近似できる。

## 証明の見取り図

次元に関する帰納法を用い、部分Okounkov体の良い双有理的性質によって大類の問題をKähler類へ近づける。凸体の切片体積を制限体積と結ぶ段階でKähler currentの拡張定理が働く。解析的特異点を保つ押し出しと修正を制御して近似を完成し、別途、反復退化で得るmoment bodyが同じ付値情報を尽くすことを示す。

## 原論文との対応
- **Abstractページ:** [arXiv:2309.07584](https://arxiv.org/abs/2309.07584)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3, 1.4; Corollary 1.2
- **論文構成の説明:** Introduction, pp. 3–5
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
