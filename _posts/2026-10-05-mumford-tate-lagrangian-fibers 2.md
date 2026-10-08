---
layout: paper
title: The Mumford--Tate group of a very general Lagrangian fiber
title_ja: Lagrangianファイブレーションの非常に一般のファイバーのMumford–Tate群
authors: Edward Varvak
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  For a primitive symplectic variety $X$ admitting a holomorphic Lagrangian fibration $f: X \to B$, we classify the possible Mumford--Tate groups of the very general fiber. We extract as a consequence that the discriminant of $f$ has codimension one in $B$. In the special case when $X$ is a hyper-Kähler manifold which is general among those admitting a Lagrangian fibration, and $b_2(X) \geq 7$, we further show that the very general fiber of $f$ is Hodge-generic. Finally, as an application of our classification, we confirm an expectation of Li--Tosatti that when $f$ is not isotrivial, the special Kähler metric on $B$ has positive holomorphic sectional curvature on the regular values of $f$.
topic: algebraic-geometry
tags:
- hodge-theory
- hyperkahler-geometry
- curvature
arxiv_id: 2610.02481v1
arxiv_url: https://arxiv.org/abs/2610.02481
arxiv_submitted: '2026-10-01'
arxiv_updated: '2026-10-01'
summary: |-
  primitive symplectic多様体のLagrangianファイブレーションについて、非常に一般のファイバーのMumford–Tate群を分類する。非等自明な場合には底のspecial Kähler計量の正の正則断面曲率を導き、判別集合が余次元1であることも示す。第二Betti数が7以上の一般のhyper-Kähler変形では、ファイバーがHodge-genericとなる。
abstract_en: |-
  For a primitive symplectic variety $X$ admitting a holomorphic Lagrangian fibration $f: X \to B$, we classify the possible Mumford--Tate groups of the very general fiber. We extract as a consequence that the discriminant of $f$ has codimension one in $B$. In the special case when $X$ is a hyper-Kähler manifold which is general among those admitting a Lagrangian fibration, and $b_2(X) \geq 7$, we further show that the very general fiber of $f$ is Hodge-generic. Finally, as an application of our classification, we confirm an expectation of Li--Tosatti that when $f$ is not isotrivial, the special Kähler metric on $B$ has positive holomorphic sectional curvature on the regular values of $f$.
summary_en: ''
abstract_ja: |-
  primitive symplectic多様体の正則Lagrangianファイブレーションを対象に、非常に一般のファイバーのMumford–Tate群を分類する。その帰結として判別集合の余次元が1であることを示す。第二Betti数が7以上で、Lagrangianファイブレーションを持つものの中で一般のhyper-Kähler多様体では、非常に一般のファイバーがHodge-genericとなる。さらに、ファイブレーションが非等自明なら、正則値の集合上のspecial Kähler計量は正の正則断面曲率を持つ。
abstract_source_url: https://arxiv.org/abs/2610.02481
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.02481v1](https://arxiv.org/abs/2610.02481)
- **著者:** Edward Varvak
- **初回投稿日:** 2026-10-01
- **最終更新日:** 2026-10-01
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

Lagrangianファイブレーションの滑らかなファイバーはAbel多様体になるが、そのHodge構造がどれほど特殊になり得るかは別の問題である。本論文は非常に一般のファイバーのMumford–Tate群を分類し、許されるHodge理論的な対称性を限定する。

対象には滑らかなhyper-Kähler多様体だけでなく、特異点を許すprimitive symplectic多様体も含まれる。非等自明な場合には、非常に一般のファイバーが同じ次元のHodge-genericなAbel多様体の積にisogenousとなる。一般のhyper-Kähler変形では、追加のBetti数条件の下で分解のないHodge-genericな場合に絞られる。

この分類は底空間の解析的幾何にも結び付く。非等自明な場合にspecial Kähler計量の正則断面曲率が正であることを示し、Li–Tosattiの期待を確認する。また、判別集合の余次元1という結果をprimitive symplecticの場合へ拡張する。

## 背景と問題設定

論文のprimitive symplectic多様体は、コンパクト、$\mathbb Q$-factorial、log-terminalで、$H^1(X,\mathcal O_X)=0$ を満たし、解消へ延長する正則シンプレクティック形式が定数倍を除き一意な正規解析空間である。

$\dim X=2g$、$f:X\to B$ をLagrangianファイブレーションとする。正則値の集合 $B^\circ$ 上ではファイバーは $g$ 次元のAbel多様体であり、周期写像 $\mathcal P:B^\circ\to\mathcal A_{g,\eta}$ を得る。非等自明ならこの周期写像は最大変動を持つという既知の結果が出発点となる。Mumford–Tate群は、その周期像が特別な部分多様体にどれほど拘束されるかを記述する。

## 主結果

### 主定理1：Mumford–Tate群の分類（Theorem 1.2）

非常に一般のファイバー $X_b$ のMumford–Tate群は、isogenyを除いて次のいずれかである。

<div>
$$
\operatorname{MT}(X_b)\sim
\begin{cases}
(\mathbb G_m\times\operatorname{Sp}_{2g/k}^{\,k})/\{\pm1\},
& f\text{ が最大変動を持つ場合},\ k\mid g,\\
\operatorname{Res}_{K/\mathbb Q}\mathbb G_{m,K},
& f\text{ が等自明で、ファイバーがCM楕円曲線 }E\text{ の }E^g\text{ にisogenous},\\
\operatorname{GL}_2,&\text{その他}.
\end{cases}
$$
</div>

第二の場合の $K$ は $E$ のCM自己準同型体である。ここで $\sim$ は群をisogenyの範囲で分類するという意味であり、指定した表示との無条件な同型を意味しない。

### ファイバーの積への分解（Corollary 1.3）

非等自明な場合、ある $k\mid g$ に対し

<div>
$$
X_b\sim A_1\times\cdots\times A_k,\qquad \dim A_i=g/k
$$
</div>

となる。$A_i$ はHodge-genericで互いにisogenousでないAbel多様体である。特に単純で余分な自己準同型を持たない。

### 底の正則断面曲率（Proposition 1.4、Corollary 1.5）

$f$ が非等自明なら、$B^\circ$ のspecial Kähler計量 $\omega_{\mathrm{SK}}$ は正の正則断面曲率を持つ。さらに $\operatorname{MT}(X_b)=\operatorname{GSp}_{2g}$ なら、正則二分断面曲率も正となる。

これを支えるProposition 1.4は、周期行列のある対角成分が解析的近傍で定数なら $f$ は等自明であると述べる。Introductionは、先行する正のRicci曲率の結果より強い曲率条件を得る点を強調する。

### 主定理2：一般の変形のHodge-generic性（Theorem 1.6）

Lagrangianファイブレーションを持つメンバーを含み、第二Betti数が $b_2\ge7$ のhyper-Kähler変形類を考える。その中でLagrangianファイブレーションを持つものとして一般の $X$ を選ぶと、非常に一般のファイバーについて

<div>
$$
\operatorname{MT}(X_b)=\operatorname{GSp}_{2g}
$$
</div>

となる。したがってファイバーは単純で余分な自己準同型を持たない。すべての個々のファイバー、あるいは任意の特殊な変形のメンバーへの主張ではない。

### 主定理3：判別集合の余次元（Theorem 1.7）

primitive symplectic多様体のLagrangianファイブレーションでは、判別集合 $D\subset B$ は余次元1である。hyper-Kählerの場合の先行結果を、底の単連結性やPicard数1を同様に使えないprimitive symplecticの場合へ拡張する。

## 証明の見取り図

滑らかなファイバーに付随するHodge構造の変動 $R^1f_*\mathbb Z_{X^\circ}$ のモノドロミーを調べる。周期像がBaily–Borel境界のrank 1退化に達することを示し、そのような退化と両立しない特殊な自己準同型やテンソル表現を排除する。これにより群の候補をシンプレクティック群の積へ絞る。

既約因子を移す作用と最大変動を用いて、積の各因子の次元が等しいことを得る。一般の変形については、因子を入れ替えるモノドロミーが特定の $I_0^*$ 型特異ファイバーを強制することを、一般の変形ではその型が現れないという先行結果と突き合わせる。以上はIntroductionの証明概観に沿う説明であり、後続節の表現論的分類そのものは確認していない。

## 原論文との対応

- **Abstractページ:** [公式Abstract](https://arxiv.org/abs/2610.02481)。`arxiv_abstract`は公式arXiv APIの原文全文を保存した。
- **Introduction:** [確認版PDF](https://arxiv.org/pdf/2610.02481v1)、Section 1, pp. 1–5。
- **Introduction中で言及された主要結果:** Theorems 1.2・1.6・1.7、Corollaries 1.3・1.5、Proposition 1.4。
- **論文構成の説明:** Section 1末尾, p. 5。
- **確認したarXivバージョン:** 2610.02481v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction。後続節の証明の検証は行っていない。
