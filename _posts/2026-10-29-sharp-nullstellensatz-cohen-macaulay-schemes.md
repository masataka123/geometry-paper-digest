---
layout: paper
title: Sharp effective Nullstellensatz for projective Cohen-Macaulay schemes
title_ja: Cohen–Macaulay射影スキームの鋭い有効零点定理
authors: Zhi Li, Xiankui Meng, Xiaoyu Su, Langfeng Zhu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AC
arxiv_abstract: In this paper, we prove a sharp effective Nullstellensatz for projective Cohen-Macaulay schemes of pure dimension over an arbitrary field. In particular, if L is an ample line bundle on a smooth complex projective variety X and J is a coherent ideal sheaf with J\otimes L globally generated, then (\sqrt{J})^{\deg_L X}\subseteq J. This establishes the sharp bound conjectured by Ein and Lazarsfeld. More generally, we obtain sharp bounds in terms of mixed intersection numbers and a refinement involving products of powers of prime ideal sheaves associated to the irreducible components of the base locus. We also establish sharp radical power bounds for homogeneous ideals in finitely generated standard graded Cohen-Macaulay domains, extending Koll\'ar's sharp effective Nullstellensatz for polynomial rings. The proofs combine purity and cycle preservation for leading Ext sheaves with Koszul evaluation maps compatible with successive divisor cuts.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- positivity
- algebraic-cycles-enumerative
arxiv_id: 2610.34946v1
arxiv_url: https://arxiv.org/abs/2610.34946
arxiv_submitted: '2026-10-26'
arxiv_updated: '2026-10-26'
summary: 射影多様体上のイデアル層に対する有効零点定理で、根基の冪指数を偏極次数まで改善する。任意の体上の純次元Cohen–Macaulayスキームへ拡張し、斉次イデアルではアフィン錐の頂点の寄与を含む鋭い上界を与える。
abstract_en: In this paper, we prove a sharp effective Nullstellensatz for projective Cohen-Macaulay schemes of pure dimension over an arbitrary field. In particular, if L is an ample line bundle on a smooth complex projective variety X and J is a coherent ideal sheaf with J\otimes L globally generated, then (\sqrt{J})^{\deg_L X}\subseteq J. This establishes the sharp bound conjectured by Ein and Lazarsfeld. More generally, we obtain sharp bounds in terms of mixed intersection numbers and a refinement involving products of powers of prime ideal sheaves associated to the irreducible components of the base locus. We also establish sharp radical power bounds for homogeneous ideals in finitely generated standard graded Cohen-Macaulay domains, extending Koll\'ar's sharp effective Nullstellensatz for polynomial rings. The proofs combine purity and cycle preservation for leading Ext sheaves with Koszul evaluation maps compatible with successive divisor cuts.
summary_en: ''
abstract_ja: 純次元Cohen–Macaulay射影スキーム上で、根基イデアルの冪が元のイデアルへ含まれるための鋭い指数を与える。特に豊富な線束LについてJ⊗Lが大域生成なら、指数はLに関するスキームの次数で足り、Ein–Lazarsfeldの予想を解決する。混合交点数や基点集合の成分ごとの精密化も扱い、標準次数付きCohen–Macaulay整域の斉次イデアルへ結果を拡張する。証明は主要Ext層の純性とサイクル、Koszul評価写像を組み合わせる。
abstract_source_url: https://arxiv.org/abs/2610.34946
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.34946v1](https://arxiv.org/abs/2610.34946)
- **著者:** Zhi Li, Xiankui Meng, Xiaoyu Su, Langfeng Zhu
- **初回投稿日:** 2026-10-26
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.AG（主分類）; math.AC
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

零点定理は、ある零点集合上で消える関数の十分高い冪が、その集合を定義するイデアルに属することを保証する。有効零点定理は「十分高い」を幾何学的な次数でどこまで小さく評価できるかを問う。

本論文は、豊富な線束$L$で$\mathcal J\otimes L$が大域生成となる場合、$\sqrt{\mathcal J}$の$\deg\_LX$乗が$\mathcal J$に含まれることを示す。従来のEin–Lazarsfeldの指数$n\deg\_LX$から次元因子$n$を除き、その予想した鋭い指数に到達する。

対象は滑らかな複素多様体に限られず、任意の体上の純次元Cohen–Macaulay射影スキームである。さらに斉次イデアルそのものへの包含では、射影スキーム上の層の包含だけでは制御できないアフィン錐の頂点の寄与がある。この追加項を含む第二の主定理を与える。

## 背景と問題設定

$\mathcal J\subset\mathcal O\_X$を連接イデアル層、$B=V(\mathcal J)$とする。射影的な問題では偏極次数や混合交点数を使って消滅に必要な指数を測る。Cohen–Macaulay性は単なる技術的仮定ではなく、著者らは仮定を外すと鋭い上界が成立しない例を後続節に挙げる。

## 主結果

### 混合交点数による包含（Theorem 1.2）

$X$は体$k$上の純$n$次元Cohen–Macaulay射影スキームとする。豊富な線束$A,L\_1,\ldots,L\_r$と切断$s\_i\in H^0(X,\mathcal J\otimes L\_i)$を取り、$0\leq r\leq n$、$B\_j=V(s\_1,\ldots,s\_j)$と置く。$\dim(B\_j\setminus|B|)\leq n-j$、さらに$r<n$なら$B\_r\setminus|B|=\varnothing$を仮定する。このとき

$$
d=\deg\bigl(c\_1(L\_1)\cdots c\_1(L\_r)c\_1(A)^{n-r}\cap[X]\bigr),\qquad (\sqrt{\mathcal J})^d\subseteq\mathcal J
$$

が成り立つ。基点集合の外側で切断が必要な次元低下を起こすことが主要な仮定である。

さらに$|B|$を覆う被約既約閉集合$W\_\alpha$と正整数$m\_\alpha$を選び、

$$
\prod\_\alpha\mathcal I\_{W\_\alpha}^{m\_\alpha}\subseteq\mathcal J,
$$

$$
\sum\_\alpha m\_\alpha\deg\left(\left(\prod\_{i=\operatorname{codim}\_XW\_\alpha+1}^{r}c\_1(L\_i)\right)c\_1(A)^{n-r}\cap[W\_\alpha]\right)\leq d
$$

とできる。これは単一の根基冪だけでなく、基点集合の各成分の寄与を重み付きで制御する精密化である。

### Ein–Lazarsfeld予想と生成次数の評価（Corollaries 1.3–1.5）

$L$が豊富で$\mathcal J\otimes L$が大域生成なら

$$
(\sqrt{\mathcal J})^{\deg\_LX}\subseteq\mathcal J
$$

となる。$m$個の切断で大域生成される場合は、$m<n$なら混合交点数$\deg(c\_1(L)^mc\_1(A)^{n-m}\cap[X])$を使える。

$X$が整で、$L$が豊富かつ大域生成、$L^{a\_i}$の非零切断が$\mathcal J$を生成し、$a\_1\geq\cdots\geq a\_m\geq1$なら、指数は$m\leq n$で$\deg\_LX\thinspace a\_1\cdots a\_m$、$m>n>1$で$\deg\_LX\thinspace a\_1\cdots a\_{n-1}a\_m$、$n=1$で$\deg\_LX\thinspace a\_m$となる。Introductionはこれらの上界が鋭いことを明言する。

### 斉次イデアルと錐の頂点（Theorem 1.6）

$S$を$S\_0=k$である有限生成標準次数付きCohen–Macaulay整域とし、$Y=\operatorname{Proj}S$、$n=\dim S-1\geq1$、$I=(f\_1,\ldots,f\_m)$、$\deg f\_i=a\_i$とする。$e=\deg\_{\mathcal O(1)}Y$と置くと

$$
d=\max\left\lbrace e\thinspace a\_m\prod\_{i=1}^{\min\lbrace m,n\rbrace -1}a\_i,\ e-1+a\_m+\sum\_{i=1}^{\min\lbrace m-1,n\rbrace }(a\_i-1)\right\rbrace
$$

について$(\sqrt I)^d\subseteq I$が成り立つ。第一項は射影的な層の包含、第二項は次数付き環に残る追加の障害を制御する。多項式環の場合には生成元の次数3以上という制限なしにKollár型の上界を回復する。

### アフィン版（Corollary 1.7）

射影閉包の斉次座標環がCohen–Macaulayである整アフィン多様体$V$では、非定数関数$f\_i$が生成する$\mathfrak a$に対して指数$\deg V\thinspace a\_m\prod\_{i=1}^{\min\lbrace m,n\rbrace -1}a\_i$による根基冪包含が得られる。$\mathfrak a=k[V]$なら$1=\sum\_i g\_if\_i$を、上の$d$で$e=\deg V$とした評価$\deg g\_i+a\_i\leq d$を満たすように選べる。一般の座標環では積の次数と次数の和は同じでないため、この評価の形が重要である。

## 証明の見取り図

主要Ext層の純性とサイクルの保存を用い、基点集合上のtorsionを取り除く際の次数をannihilatorへ変換する。Koszul評価写像の像を逐次的な因子切断と両立させ、そのannihilatorを次の段階へ運ぶ。これにより次数の計数をイデアルの冪包含へ結びつける。Introductionは、この双対性に基づく方法をSkoda型除法や消去法と区別している。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.34946)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.34946v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.2、1.6、Corollaries 1.3–1.5、1.7
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.34946v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
