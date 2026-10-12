---
layout: paper
title: Chern classes of Levi non-degenerate CR manifolds
title_ja: Levi非退化CR多様体におけるChern単項式の非消滅
authors: Yuya Takeuchi
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.DG
- math.GT
arxiv_abstract: We construct closed Levi non-degenerate CR manifolds with non-vanishing Chern monomials. For every $n \geq 2$ and $\lceil n / 4 \rceil \leq m \leq \lfloor n / 2 \rfloor$, there exists a $(2 n + 1)$-dimensional example of signature $(\lfloor n / 2 \rfloor, \lceil n / 2 \rceil)$ on which all Chern monomials with positive indices at most $m$ and total weight at most $n - m$ are non-zero in cohomology with real coefficients. Taking $m = \lceil n / 4 \rceil$ gives examples with $c_{1}^{\lfloor 3 n / 4 \rfloor} \neq 0$. For $n = 4$ or $n \geq 6$, the latter examples show that the Chern-class vanishing theorem for strictly pseudoconvex CR manifolds does not extend to the Levi non-degenerate case. In these dimensions, their underlying manifolds admit no strictly pseudoconvex CR structures. The construction uses circle bundles over products of integral pseudo-K\"{a}hler manifolds.
topic: several-complex-variables
tags:
- chern-classes
- cr-geometry
arxiv_id: 2610.12785v1
arxiv_url: https://arxiv.org/abs/2610.12785
arxiv_submitted: '2026-10-08'
arxiv_updated: '2026-10-08'
summary: 閉Levi非退化CR多様体で、多数のChern単項式が同時に非零になる例を構成する。強擬凸の場合の消滅定理との比較により、一定の次元では同じ滑らかな多様体上に強擬凸CR構造が存在しないことも分かる。
abstract_en: ''
summary_en: Definiteness of the Levi form has consequences for the topology of a closed CR manifold. Takeuchi constructs indefinite examples where many Chern monomials survive at once. Circle bundles turn carefully chosen characteristic classes on the base into the required classes upstairs. Some of the resulting smooth manifolds cannot carry any strictly pseudoconvex CR structure.
abstract_ja: Levi形式が非退化であっても正定値とは限らないCR多様体では、強擬凸の場合に消えるChern単項式が非零となり得る。本論文は、次元とChern類の添字に明示的な範囲を指定し、その範囲の単項式を一つの閉CR多様体上で同時に非消滅にする。積分pseudo-Kähler形式を持つ基底の円束を用い、Gysin完全列で引き戻し後の非消滅を検出する。第一Chern類の高い冪の例は、強擬凸CR構造の存在への位相的障害となる。
abstract_source_url: https://arxiv.org/abs/2610.12785
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.12785v1](https://arxiv.org/abs/2610.12785)
- **著者:** Yuya Takeuchi
- **初回投稿日:** 2026-10-08
- **最終更新日:** 2026-10-08
- **主分類・副分類:** math.CV（主分類）; math.DG, math.GT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

強擬凸CR多様体は複素多様体内の強擬凸領域の境界として現れ、その実現はコホモロジーの積やChern類に制約を与える。本論文が問うのは、Levi形式の正定値性を非退化性へ弱めても同じ消滅が残るか、という問題である。

答えは一般には否定的である。著者は、指定した範囲のChern単項式が一つの閉Levi非退化CR多様体上で同時に非零となる例を作る。単一の特性数だけでなく、添字と総重みによって指定される一群のコホモロジー類を扱う点が主結果の特徴である。

特に第一Chern類の高い冪が非零になる例を得る。一定の次元では、この非消滅は強擬凸CR構造の一般的な位相制約と両立しない。そのため、構成したCR構造が強擬凸でないだけでなく、台の滑らかな多様体上の別の強擬凸CR構造も排除できる。

## 背景と問題設定

<p>実次元 $2n+1\ge5$ の閉強擬凸CR多様体 $(M,T^{1,0}M)$ では、先行研究により</p>

<div>
$$
c_{r_1}(T^{1,0}M)\smile\cdots\smile c_{r_k}(T^{1,0}M)=0
\qquad\text{if }2(r_1+\cdots+r_k)\ge n+2
$$
</div>

<p>が実係数コホモロジーで成り立つ。また $i_l\le n-1$、$i_1+\cdots+i_k\ge n+2$ のとき、$H^{i_1}(M;\mathbb R)\otimes\cdots\otimes H^{i_k}(M;\mathbb R)$ からのcup積も消える。前者は著者の既知の結果、後者はBungartおよびPopescu-Pampuの結果として紹介されている。</p>

<p>本論文はLevi形式が正負両方の固有値を持つ場合を調べる。正整数の多重添字 $r=(r_1,\ldots,r_k)$ に対して、$|r|=r_1+\cdots+r_k$ を総重みとする。</p>

## 主結果

### 主定理1：Chern単項式の同時非消滅（Theorem 1.1）

<p>$n\ge2$ と $\lceil n/4\rceil\le m\le\lfloor n/2\rfloor$ を固定する。このとき、実次元 $2n+1$、Levi形式の符号数 $(\lfloor n/2\rfloor,\lceil n/2\rceil)$ の閉Levi非退化CR多様体 $(S,T^{1,0}S)$ で、</p>

<div>
$$
c_{r_1}(T^{1,0}S)\smile\cdots\smile c_{r_k}(T^{1,0}S)
\ne0\quad\text{in }H^{2|r|}(S;\mathbb R)
$$
</div>

<p>となるものが存在する。ここで $k\ge1$、$1\le r_i\le m$、$|r|\le n-m$ を満たすすべての添字を同時に許す。単項式ごとに異なる例を選ぶのではなく、一つの多様体で全条件が成り立つ。</p>

### 主帰結：第一Chern類の高い冪（Corollary 1.2）

<p>各 $n\ge2$ に対し、上と同じ次元・符号数を持ち、</p>

<div>
$$
c_1(T^{1,0}S)^{\lfloor3n/4\rfloor}\ne0
\quad\text{in }H^{2\lfloor3n/4\rfloor}(S;\mathbb R)
$$
</div>

<p>となる例が存在する。これは $m=\lceil n/4\rceil$ とし、すべての添字を1に選んで得られる。対応する $H^2(S;\mathbb R)^{\otimes\lfloor3n/4\rfloor}$ のcup積も非自明である。</p>

<p>$n=4$ または $n\ge6$ では $2\lfloor3n/4\rfloor\ge n+2$ であるため、強擬凸の場合の消滅定理はLevi非退化の場合へ拡張できない。さらにcup積の非消滅は台の多様体だけに依存するので、この次元範囲の例には強擬凸CR構造が存在しない。Introductionは、同値な言い方として正則に充填可能な接触構造の不存在も述べる。</p>

## 証明の見取り図

積分pseudo-Kähler多様体上の円束を構成し、そのCR接束を基底の正則接束の引き戻しとして扱う。基底で非零のChern類も円束へ引き戻すと消える可能性があるため、Gysin完全列によって消滅の可能性を制御する。

<p>具体的には、基底の閉実 $(m,m)$ 形式 $\alpha$ を選び、その類が $[\omega]$ による積で消える一方、対象のChern単項式と適当な第一Chern類の冪には非零に対合するようにする。これが全空間での非消滅を検出する役割を持つ。</p>

基底は複素次元2・3・4の三種類の構成要素の積である。3次元と4次元の要素には、それぞれ複素トーラスとnilmanifold上の射影束を用いる。Introductionは、円束と判定法をSection 2、射影束をSection 3、構成要素をSection 4、その組合せをSection 5で扱うと説明する。

## 原論文との対応

- **Abstractページ:** [Chern classes of Levi non-degenerate CR manifolds](https://arxiv.org/abs/2610.12785)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.12785v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1, Corollary 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.12785v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
