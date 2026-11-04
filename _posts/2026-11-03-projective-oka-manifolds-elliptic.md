---
layout: paper
title: Every projective Oka manifold is elliptic
title_ja: 射影Oka多様体の楕円性
authors: Franc Forstneric, Finnur Larusson
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: We show that every projective Oka manifold is elliptic in the sense of Gromov. This gives an affirmative answer to a long-standing open question.
topic: several-complex-variables
tags:
- oka-theory
arxiv_id: 2502.20028v6
arxiv_url: https://arxiv.org/abs/2502.20028
arxiv_submitted: '2025-02-27'
arxiv_updated: '2026-05-05'
summary: 射影多様体ではOka性からGromovの意味の楕円性が従うことを示す。これによりOka性・楕円性・劣楕円性が同値となるが、得られるスプレーは正則であり、代数的楕円性との同値を主張するものではない。
abstract_en: We show that every projective Oka manifold is elliptic in the sense of Gromov. This gives an affirmative answer to a long-standing open question.
summary_en: ''
abstract_ja: すべての射影Oka多様体がGromovの意味で楕円的であることを示す。したがって射影多様体の範囲では、Oka性、楕円性、劣楕円性が同値になる。これは長年の問題に射影的な場合の肯定的解答を与える。
abstract_source_url: https://arxiv.org/abs/2502.20028
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2502.20028v6](https://arxiv.org/abs/2502.20028)
- **著者:** Franc Forstneric, Finnur Larusson
- **初回投稿日:** 2025-02-27
- **最終更新日:** 2026-05-05
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Oka多様体は、Stein多様体からの正則写像について強いホモトピー原理を満たす多様体である。他方、Gromovの楕円性は、接方向をすべて生成できる正則スプレーの存在という具体的な幾何学的条件である。楕円性からOka性は既知であったが、その逆は一般には成り立たない。

本論文は、射影多様体に限れば逆向きも成立することを示す。すなわち射影Oka多様体は楕円的である。既知の含意と合わせ、射影的な範囲でOka性・楕円性・劣楕円性が同値になる。

重要なのは正則なスプレーと代数的なスプレーを区別することである。Abel多様体のように射影Oka多様体でありながら代数的楕円的でない例があり、主結果を代数的楕円性へ置き換えることはできない。コンパクトだが非射影的な場合の問題も残る。

## 背景と問題設定

複素多様体 $Y$ 上の正則スプレーは、正則ベクトル束 $\pi:E\to Y$ の全空間からの正則写像 $s:E\to Y$ で、零切断上では恒等写像となるものである。支配的であるとは、各 $y\in Y$ でファイバー方向の微分が全射、すなわち

$$
s(0\_y)=y,\qquad (ds)\_{0\_y}(E\_y)=T\_yY
$$

となることをいう。支配的なスプレーを一つ持てば楕円的である。劣楕円性は有限個のスプレーによって

$$
(ds\_1)\_{0\_y}(E\_{1,y})+\cdots+(ds\_m)\_{0\_y}(E\_{m,y})=T\_yY
$$

となることを要求する。

既知のOka原理により、楕円性から劣楕円性を経てOka性が従う。一方、非コンパクトな例では、内部を持つコンパクト多項式凸集合 $K\subset\mathbb C^n$ の補集合が、$n\geq3$ のときOkaだが劣楕円的ではないという先行結果がある。これらはSteinではなく、Stein Oka多様体が楕円的であるという既知結果とは矛盾しない。

## 主結果

### 射影Oka多様体は楕円的（Theorem 1.1）

$Y$ が射影Oka多様体なら、$Y$ 上に支配的な正則スプレーが存在する。したがって、射影多様体では

$$
\text{Oka性}\quad\Longleftrightarrow\quad
\text{楕円性}\quad\Longleftrightarrow\quad\text{劣楕円性}
$$

が成り立つ。新しい含意はOka性から楕円性への方向である。

Introductionによれば、証明で得られるスプレーの定義域は、十分豊富な線束の双対の有限直和として選べる。その線束を $L$ と書けば

$$
E\simeq(L^\vee)^{\oplus m}
$$

という形である。適切な射影埋め込みでは普遍線束の有限直和になる。束のこの具体的な形が示される一方、スプレー写像そのものが代数的であるとは結論していない。

### 代数的楕円性との違いと残る問題

代数的楕円性は、代数的ベクトル束上に支配的な代数的スプレーを持つ条件である。序論はAbel多様体を反例として、主定理の代数的な対応物が成立しないことを指摘する。射影的な対象であっても、スプレーの全空間からの正則写像を代数的写像と同一視できない。

Problem 1.2は、コンパクトで非射影的なOka多様体のうち、楕円的または劣楕円的でないものが存在するかを問う。これは本論文が解決した主張ではない。

また、Oka性にはZariski開被覆に関する局所化定理があるのに対し、正則な楕円性・劣楕円性には同様の局所化結果が知られていないと序論は説明する。そのため、最近の方法でOka性が分かった射影多様体にも楕円性が従う点が主定理の意義となる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2502.20028)
- **Introduction:** [PDF](https://arxiv.org/pdf/2502.20028v6) — Section 1, pp. 1–3（Section 2開始前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1; Problem 1.2; equation (1.1)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2502.20028v6
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
