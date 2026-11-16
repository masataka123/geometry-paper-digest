---
layout: paper
title: Inequalities for intersection numbers from Hodge-Riemann relations
title_ja: 二次のHodge–Riemann関係から得られる交点数不等式
authors: Xiangru Zeng
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AC
arxiv_abstract: We derived inequalities for intersection numbers of nef classes inside algebras satisfying the Kähler package, using Hodge-Riemann relations up to degree two. As an application, we construct certain strictly Lorentzian polynomials and show that they cannot be realized as the volume polynomial of nef classes inside such an algebra.
topic: algebraic-geometry
tags:
- positivity
- hodge-theory
- algebraic-cycles-enumerative
arxiv_id: 2611.17841v1
arxiv_url: https://arxiv.org/abs/2611.17841
arxiv_submitted: '2026-11-13'
arxiv_updated: '2026-11-13'
summary: Kähler packageを満たす次数付き代数において、二次までのHodge–Riemann関係からnef類の新しい交点数不等式を導く。一次の関係から従うAlexandrov–Fenchel型不等式だけでは得られない制約を示す。応用として、狭義Lorentz多項式でもこの種の代数のnef類の体積多項式として実現できない例を構成する。
abstract_en: ''
summary_en: Intersection numbers encode more than the familiar log-concavity constraints. This paper extracts a further inequality from the degree-two Hodge–Riemann relations in a graded algebra with a Kähler package. A concrete quartic construction distinguishes this constraint from the Alexandrov–Fenchel inequalities. Consequently, strict Lorentzian behaviour does not suffice for realization as the volume polynomial of nef classes in such an algebra.
abstract_ja: Poincaré双対性、混合Hard Lefschetz、混合Hodge–Riemann関係を備える代数を考え、nef類の交点数に対する不等式を与える。二次までのHodge–Riemann関係を使うことで、一次の関係が与えるAlexandrov–Fenchel型の制約を超える。さらに、正係数とLorentz型Hessianを持つ具体的な四次多項式を摂動し、新不等式に反する狭義Lorentz多項式を得る。これによってLorentz性だけではnef類の体積多項式としての実現性を保証しないことを示す。
abstract_source_url: https://arxiv.org/abs/2611.17841
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.17841v1](https://arxiv.org/abs/2611.17841)
- **著者:** Xiangru Zeng
- **初回投稿日:** 2026-11-13
- **最終更新日:** 2026-11-13
- **主分類・副分類:** math.AG（主分類）; math.AC
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler幾何では、コホモロジーの交点数がHodge理論によって強い制約を受ける。一次のHodge–Riemann関係からはAlexandrov–Fenchel型不等式が得られ、体積や交点数の対数凹性を説明できる。本論文は二次までの関係を使うと、さらにどのような制約が見えるかを問う。

著者は、正値性を持つ一次式の積である三次式を分解するデータから、二次式の自己交点を含む新しい不等式を導く。対象はKähler多様体のコホモロジーに限らず、Kähler packageという代数的条件を満たす次数付き代数である。

応用では狭義Lorentz多項式を具体的に作り、その多項式が新不等式に反することを示す。したがって、一次のHodge理論に対応するLorentz性だけでは、より高次のHodge関係を持つ代数のnef類の体積多項式として実現できるとは限らない。

## 背景と問題設定

$A^\bullet$ は最高次数 $d$ の有限生成可換次数付き実代数で、次数写像 $\deg:A^d\to\mathbb R$ を持つ。開凸錐 $K\subseteq A^1$ に関するPoincaré双対性、混合Hard Lefschetz、混合Hodge–Riemann関係をまとめてKähler packageと呼ぶ。$K$ の元をample、閉包 $\overline K$ の元をnefと呼ぶ。

多項式環 $R=\mathbb R[X\_1,\ldots,X\_n]$ で、$K\_R$ を係数がすべて正の一次式の錐とする。$A\preceq B$ は $B-A\in\overline K\_R$ を意味する。

## 主結果

### 主定理（Theorem 1.1）

二次式 $P$ と一次式 $H,A\_i,B\_i,V\_i$ が

$$
HP=\sum\_{i=1}^r A\_iB\_iV\_i,\qquad
H,A\_i,B\_i\in\overline K\_R,\qquad
0\preceq A\_i,B\_i\preceq H
$$

を満たすとする。$d\geq4$ のKähler packageを持つ代数へ、$\overline K\_R$ を $\overline K$ に送る次数付き環準同型 $f:R\to A$ を取り、それぞれの像を $p,h,\alpha\_i,\beta\_i,v\_i$ と書く。$\ell\in A^{d-4}$ は $d-4$ 個のnef類の積とする。

すべての $i$ で $\deg(\alpha\_i\beta\_i h^2\ell)\neq0$ のとき、

$$
\deg(p^2\ell)+25\left(
\sum\_{i=1}^r
\sqrt{\frac{2\deg(\alpha\_i\beta\_i h v\_i\ell)^2}
{\deg(\alpha\_i\beta\_i h^2\ell)}
-\deg(\alpha\_i\beta\_i v\_i^2\ell)}
\right)^2
\geq\frac{2\deg(ph^2\ell)^2}{\deg(h^4\ell)}.
$$

係数25、各平方根の中の差、和全体の二乗が定理の具体的内容である。$V\_i$ 自体にnef性を課してはいない。一方、分解の係数 $A\_i,B\_i$ が $H$ 以下であることと分母の非消滅は省けない仮定である。

### Lorentz多項式の実現性への障害（Example 1.2）

原論文は

$$
a=\frac{2023}{1500},\quad b=\frac{119}{100},\quad
r=\frac{11}{10},\quad s=\frac12
$$

を用いて、次の四次多項式を考える。ここでの $r$ は上の和の項数とは別の定数である。

$$
\begin{aligned}
F(x,y,z)={}&\frac{a x^4}{24}+\frac{b(x^3y+x^3z)}6
+\frac{x^2y^2+x^2z^2+y^2z^2}4+\frac{r x^2yz}2\\
&+\frac{s(xy^3+xz^3)}6+\frac{xy^2z+xyz^2}2
+\frac{s^2(y^4+z^4)}{24}+\frac{s(y^3z+yz^3)}6.
\end{aligned}
$$

$\sigma=x+y+z$ として $F\_\varepsilon=F(x+\varepsilon\sigma,y+\varepsilon\sigma,z+\varepsilon\sigma)$ を取ると、十分小さい正の $\varepsilon$ に対してこれは狭義Lorentz多項式となる。しかし

$$
\frac1{4!}\deg(x\chi+y\gamma+z\zeta)^4=F\_\varepsilon(x,y,z)
$$

という体積多項式をnef類 $\chi,\gamma,\zeta$ で実現しようとすると、Theorem 1.1に反する。これにより、Alexandrov–Fenchel型不等式と二次までのHodge–Riemann関係が与える制約を区別できる。

## 証明の見取り図

Introductionが示す方針は、Lorentz符号の対称形式に付随するノルム評価を準備し、それを交点形式の不等式へ適用するというものである。最後に具体的な四次式の例を解析し、旧来の不等式だけでは新しい制約を導けないことを示す。本記事では後続節の補助不等式の証明を再構成せず、主定理とIntroductionの具体例の範囲に留めている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.17841)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.17841v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1；Example 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.17841v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
