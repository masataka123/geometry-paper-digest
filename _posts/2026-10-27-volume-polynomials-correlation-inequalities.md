---
layout: paper
title: Correlation inequalities for volume polynomials
title_ja: 体積多項式の相関不等式とnef交点数
authors: June Huh, Mateusz Michałek, Botong Wang, Jian Xiao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CO
arxiv_abstract: We establish sharp correlation inequalities for volume polynomials associated with covers of multisets. These inequalities simultaneously generalize the Khovanskii--Teissier and reverse Khovanskii--Teissier inequalities for intersections of nef divisor classes on projective varieties. They also hold for volume polynomials arising from convex bodies and Hermitian matrices, recovering and extending classical results such as the Alexandrov--Fenchel inequality for mixed volumes of convex bodies and the Hadamard--Fischer inequality for determinants of positive semidefinite matrices. As a combinatorial application, we prove a negative correlation inequality for partitions of bases of matroids that are linearly realizable over a field.
topic: algebraic-geometry
tags:
- positivity
- monge-ampere-equations
arxiv_id: 2610.34562v1
arxiv_url: https://arxiv.org/abs/2610.34562
arxiv_submitted: '2026-10-25'
arxiv_updated: '2026-10-25'
summary: nef因子の交点数に対し、多重集合の被覆で添字付けられる最良定数付き不等式を示す。Hodge指数不等式と逆Khovanskii–Teissier不等式を統一し、Kähler類、混合判別式、混合体積、表現可能マトロイドの相関へ展開する。
abstract_en: We establish sharp correlation inequalities for volume polynomials associated with covers of multisets. These inequalities simultaneously generalize the Khovanskii--Teissier and reverse Khovanskii--Teissier inequalities for intersections of nef divisor classes on projective varieties. They also hold for volume polynomials arising from convex bodies and Hermitian matrices, recovering and extending classical results such as the Alexandrov--Fenchel inequality for mixed volumes of convex bodies and the Hadamard--Fischer inequality for determinants of positive semidefinite matrices. As a combinatorial application, we prove a negative correlation inequality for partitions of bases of matroids that are linearly realizable over a field.
summary_en: ''
abstract_ja: 射影多様体上のnef因子の交点数に関する相関不等式を、多重集合の被覆を用いて定式化する。最良の組合せ的定数を持つこの不等式は、コンパクトKähler多様体上のnef類にも成立し、Hodge指数不等式と逆Khovanskii–Teissier不等式を共通に拡張する。体積多項式を介して半正定値行列、凸体、線形表現可能なマトロイドにも帰結を与える。
abstract_source_url: https://arxiv.org/abs/2610.34562
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.34562v1](https://arxiv.org/abs/2610.34562)
- **著者:** June Huh, Mateusz Michałek, Botong Wang, Jian Xiao
- **初回投稿日:** 2026-10-25
- **最終更新日:** 2026-10-25
- **主分類・副分類:** math.AG（主分類）; math.CO
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

nef因子の交点数にはHodge指数不等式やKhovanskii–Teissier型不等式がある。本論文は、それらを多重集合の被覆という組合せ的データで整理し、最良定数を持つ一つの不等式族へ拡張する。

同じ不等式はコンパクトKähler多様体のnefな $(1,1)$ 類にも成立する。さらに体積多項式の間の包含関係を使うと、半正定値行列の混合判別式と凸体の混合体積についての不等式が得られる。線形表現可能なマトロイドの基底を一様に選ぶ確率にも、分割に対する相関不等式が現れる。

この不等式族は、体積多項式がLorentzianであるという既知の性質だけから形式的に出るものではない。最良定数と多重集合の重複度を保持することで、Lorentzian多項式でも体積多項式として実現できない例を区別できる。一般のマトロイドへの拡張や等号条件には未解決の部分が残る。

## 背景と問題設定

有限集合 $E$ 上の多重集合 $B$ は重複度 $B(e)\ge0$ を持ち、$|B|=d$ とする。$I=(I\_1,\ldots,I\_m)$ が $B$ の $r$ 被覆であるとは、各 $I\_j\subseteq B$ かつ $\sum\_jI\_j=rB$ が成り立つことをいう。空集合や同じ部分多重集合の反復も許す。係数を

$$
\binom{B}{I}=\prod\_{j=1}^m\prod\_{e\in E}\binom{B(e)}{I\_j(e)}
$$

と定義する。因子のdivided powerは $\alpha^{[k]}=\alpha^k/k!$、$\beta^{[B]}=\prod\_e\beta\_e^{[B(e)]}$ であり、この階乗を省くと定数が変わる。括弧 $(\cdot)$ は最上次数の交点数、Kähler設定では積の積分を表す。

## 主結果

### nef交点数の被覆不等式（Theorem 1.2）

代数閉体上の $d$ 次元射影多様体で、$\alpha$ と全ての $\beta\_e$ をnef因子とする。このとき

$$
\binom{B}{I}\bigl(\beta^{[B]}\bigr)^r
\bigl(\alpha^{[d]}\bigr)^{m-r}
\le\prod\_{j=1}^m\bigl(\beta^{[I\_j]}\alpha^{[d-|I\_j|]}\bigr).
$$

コンパクトKähler多様体上のnef $(1,1)$ 類についても同じ式が成立する。係数 $\binom{B}{I}$ は各 $B,I$ に対して最良である。Hodge指数不等式と逆Khovanskii–Teissier不等式は特別な被覆を選んだ場合に含まれる。

### 体積多項式の微分不等式（Corollary 1.3）

nef因子 $\beta\_1,\ldots,\beta\_n$ の体積多項式を

$$
f(x)=\frac1{d!}\deg\_X(x\_1\beta\_1+\cdots+x\_n\beta\_n)^d
$$

とする。divided power微分を $\partial^{[S]}=\prod\_i\partial\_i^{S(i)}/S(i)!$ と書けば

$$
\binom{B}{I}(\partial^{[B]}f)^r f(x)^{m-r}
\le\prod\_{j=1}^m\partial^{[I\_j]}f(x),\qquad x\in\mathbb R\_{\ge0}^n.
$$

Kähler類の体積多項式にも成立する。この条件はLorentzian性を超える制約であり、体積多項式としての実現可能性を調べる手段となる。

### 補助因子・行列・凸体への拡張（Corollaries 1.4–1.6）

射影多様体の次元が $d+k$ で、$\gamma=\gamma\_1\cdots\gamma\_k$ がnef因子の積なら、主不等式の全ての交点積に共通に $\gamma$ を挿入できる。

$$
\binom{B}{I}(\beta^{[B]}\gamma)^r(\alpha^{[d]}\gamma)^{m-r}
\le\prod\_{j=1}^m(\beta^{[I\_j]}\alpha^{[d-|I\_j|]}\gamma).
$$

より一般にはprojective covolume polynomialの評価を挿入できる。ただしこの補助因子付き拡張の一般のKähler類に対する類似は未解決とされる。

全てのHermitian体積多項式と凸体体積多項式がprojective体積多項式に含まれるため、同じdivided powerの規約で、上式の交点数を混合判別式または混合体積に置き換えた不等式が成立する。例えば正半定値 $d\times d$ 行列について、論文の混合判別式の規約では

$$
D[M\_1,\ldots,M\_d]\le\frac1{d!}\prod\_{i=1}^d\operatorname{tr}(M\_i)
$$

を得る。凸体側にはAlexandrov–Fenchel不等式やBollobás–Thomason不等式が含まれる。一般の等号成立条件を分類したという主張ではない。

### 表現可能マトロイドの相関（Theorem 1.1）

線形表現可能なマトロイドの基底 $B$ と、その分割 $B=I\_1\sqcup\cdots\sqcup I\_m$ に対し

$$
\Pr(B)\le\prod\_{j=1}^m\Pr(I\_j)
$$

が成り立つ。$\Pr(S)$ は一様ランダムな基底が $S$ を含む確率である。任意の二部分集合に対する単純な負相関を主張しているのではない。一般のマトロイドへの同じ分割不等式の拡張は予想として区別される。

## 証明の見取り図

まず集合の場合に半正定値行列の不等式を線形代数で示す。YauのCalabi予想解決による体積形式の処方とHölder不等式を組み合わせ、行列からnef Kähler類へ移す。多重集合への移行では、projective体積多項式を保つ切詰め・偏極作用素と相加相乗平均を用いる。

この代数的移行にはKähler類について直接の類似が知られていないため、一度projective体積多項式から行列へ戻し、その後再びKähler設定へ移す。任意標数の代数閉体上では、制限体積と双有理幾何による議論が解析的な段階を置き換える。多重集合の係数まで保ったまま各分野を往復する点が証明構造の特徴である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.34562)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.34562v1) — Section 1, pp. 1–10（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2; Corollaries 1.3–1.6; Examples 1.7, 1.8
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.34562v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
