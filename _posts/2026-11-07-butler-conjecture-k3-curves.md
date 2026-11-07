---
layout: paper
title: Butler's conjecture for K3 curves
title_ja: K3曲線上のcoherent systemによるButler予想の証明
authors: Soheyla Feyzbakhsh, Aliaksandra Novik, Angela Ortega
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Butler's conjectures predict that, on a general smooth curve $C$ of genus $g\ge3$, a general coherent system $[\mathcal{O}_C\otimes V\xrightarrow{\varphi}E]$ with semistable underlying bundle $E$ and $\dim V>\operatorname{rk}(E)$ has surjective evaluation map $\varphi$ and stable kernel. In this paper, we prove Butler's conjectures for $g\ge8$ in the two cases in which the Brill-Noether geometry of a general curve is known, namely rank one and the range $\mu(E)>2g-2$. By deformation and openness, it suffices to establish the result on a single Brill-Noether-Petri general curve. We do so for curves on K3 surfaces of Picard rank one, using the wall-crossing theory of coherent systems developed by the first two authors.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- stability
- moduli
arxiv_id: 2611.08333v1
arxiv_url: https://arxiv.org/abs/2611.08333
arxiv_submitted: '2026-11-05'
arxiv_updated: '2026-11-05'
summary: Picard階数一のK3曲面上の種数8以上の曲線について、coherent systemの評価写像の全射性と核の安定性を示す。階数一または傾きが2g−2を超える範囲を扱い、一般曲線への変形と、大域生成安定束の数値的存在条件を導く。
abstract_en: Butler's conjectures predict that, on a general smooth curve $C$ of genus $g\ge3$, a general coherent system $[\mathcal{O}_C\otimes V\xrightarrow{\varphi}E]$ with semistable underlying bundle $E$ and $\dim V>\operatorname{rk}(E)$ has surjective evaluation map $\varphi$ and stable kernel. In this paper, we prove Butler's conjectures for $g\ge8$ in the two cases in which the Brill-Noether geometry of a general curve is known, namely rank one and the range $\mu(E)>2g-2$. By deformation and openness, it suffices to establish the result on a single Brill-Noether-Petri general curve. We do so for curves on K3 surfaces of Picard rank one, using the wall-crossing theory of coherent systems developed by the first two authors.
summary_en: ''
abstract_ja: 種数8以上の一般曲線に対するButler予想を、階数一の場合と傾きが2g−2より大きい場合に証明する。まずPicard階数一のK3曲面上の一般曲線で、一般のcoherent systemの評価写像が全射で核が傾き安定になることを示す。coherent systemのBridgeland安定性の壁越えで不安定化する部分の次元を制御し、変形と開性によって一般曲線へ結果を移す。
abstract_source_url: https://arxiv.org/abs/2611.08333
license_name: CC0 1.0 Universal
license_url: http://creativecommons.org/publicdomain/zero/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.08333v1](https://arxiv.org/abs/2611.08333)
- **著者:** Soheyla Feyzbakhsh, Aliaksandra Novik, Angela Ortega
- **初回投稿日:** 2026-11-05
- **最終更新日:** 2026-11-05
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)

## 要約

曲線上のベクトル束 $E$ とその切断空間の一部 $V$ を選ぶと、評価写像 $\mathcal O\_C\otimes V\to E$ が得られる。Butler予想は、一般の曲線上で十分に一般の組を選べば、この写像が全射となり、その核も安定な束になるという予想である。

本論文は、種数8以上について、階数一の場合と、任意の階数で傾きが $2g-2$ を超える場合を扱う。まずPicard階数一のK3曲面上の一般曲線で結果を証明し、coherent systemの変形と安定性の開性を通じて一般曲線へ移す。

証明では、評価写像を束と切断の付随データとしてではなく、coherent systemの導来圏の対象として扱う。安定性条件を変化させたときに一般の対象がどの壁を越えられるかを解析し、大域生成性と核の安定性へ結び付ける。さらに、大域生成な安定束が存在するための正確な数値条件が得られる。

## 背景と問題設定

型 $(r,d,n)$ のcoherent systemは、階数 $r$、次数 $d$ の半安定束 $E$ と $n$ 次元の切断空間 $V$ による写像 $\varphi:\mathcal O\_C\otimes V\to E$ である。論文の $M\_\infty(r,d,n)$ では、切断上の写像が単射であり、傾きが等しい真の部分束 $E'\subset E$ に対して

$$
\frac{\dim(V\cap H^0(C,E'))}{\operatorname{rk}E'}<\frac{\dim V}{\operatorname{rk}E}
$$

を要求する。

Butler予想は、$n>r$ でこのモジュライが非空なら、一般の対象で評価写像が全射かつ核が傾き安定となることを予想する。核を双対化するdual span構成は、階数の異なるcoherent systemのモジュライを結び、Brill–Noether幾何に新しい対応を与える。

## 主結果

### 評価写像の全射性と核の安定性（Theorem 1.1）

$X$ を $\operatorname{Pic}(X)=\mathbb ZH$ の滑らかなK3曲面、$C\in|H|$ を種数 $g\geq8$ の一般の滑らかな曲線とする。次のどちらかを仮定する。

- $r=1$ かつ $n\geq2$。
- $n>r>0$ かつ $d>r(2g-2)$。

$M\_\infty(r,d,n)$ が非空なら、一般の対象の評価写像 $\varphi$ は全射で、その核は傾き安定である。結論は単なる半安定性より強い。一方、高階数で傾きが $2g-2$ 以下の全範囲を解決する定理ではない。

### 一般曲線への移行

定理の各固定された数値型 $(r,d,n)$ について、同じ結論が種数 $g\geq8$ の一般の滑らかな曲線でも成立する。高い傾きの範囲では $H^1(C,E)=0$ により切断が変形に沿って持ち上がり、階数一ではK3曲線のPetri単射性が同じ役割を果たす。

評価写像の全射性と核の安定性は開条件であり、相対モジュライの滑らかさと既知の既約性を合わせて一般の曲線へ移す。Brill–Noether数が零の階数一の場合は有限ファイバーを別に扱っており、単に一つの特殊曲線の例があるというだけの議論ではない。

### 大域生成な安定束の存在条件（Corollary 1.2）

上記の $C$ で、階数 $R\geq1$、次数 $d>0$ の大域生成な安定束が存在することは、次の条件と同値である。

$d\leq2g-2$ のときは

$$
\rho(g,R,d)=g-(R+1)(g-d+R)\geq0,
$$

$d>2g-2$ のときは

$$
R\leq d-g
$$

である。

これは核束の安定性を存在問題へ適用した結果であり、数値条件が十分であるだけでなく必要でもある。

## 証明の見取り図

coherent systemの導来圏に構成された二次元のBridgeland安定性条件の切片を用いる。large volume側では束の傾き安定性が現れ、対象 $[\mathcal O\_C\xrightarrow{\mathrm{id}}\mathcal O\_C]$ が決めるBrill–Noether壁へ向かって安定性条件を動かす。

次数をずらして数値範囲を整理した後、最初に不安定化し得る壁を調べる。二つの因子と拡大の変形を数え、切断数やHarder–Narasimhan filtrationから障害空間を評価することで、各壁で不安定化する集合が全モジュライより小さいことを示す。

経路上の壁の局所有限性を使えば、一般のcoherent systemはこれらの集合を避けてBrill–Noether壁まで到達する。この壁で評価写像と核束を制御するのが基本的な仕組みである。Introductionの概略は途中で半安定性を説明しているが、主定理の最終結論は核の傾き安定性である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.08333)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.08333v1) — Section 1, pp. 1–4（Section 2開始直前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1; Corollary 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.08333v1
- **確認したライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)
- **source\_scope:** Abstract and Introduction
