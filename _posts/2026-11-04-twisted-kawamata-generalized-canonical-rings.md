---
layout: paper
title: On twisted Kawamata's semi-positivity and finite generation of generalized canonical rings
title_ja: 捩れた川又半正値性と一般化標準環の有限生成
authors: Yoshinori Gongyo, Shigeharu Takayama
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: We give a twisted version of the Kawamata semi-positivity theorem by the $\mathbb{Q}$-line bundle with a vanishing Lelong number at every point. Moreover, we apply the result to the finite generation problem for canonical rings of Birkar's generalized pairs.
topic: algebraic-geometry
tags:
- positivity
- singularities
- minimal-model-program
- vector-bundles-sheaves
arxiv_id: 2404.07401v3
arxiv_url: https://arxiv.org/abs/2404.07401
arxiv_submitted: '2024-04-11'
arxiv_updated: '2025-12-05'
summary: Lelong数が各点で零となる半正曲率の特異Hermitian計量で捩った川又半正値性定理を示す。標準束公式のmoduli部分にも同じ計量の性質が残ることを使い、解析的仮定付きのprojective generalized klt対の標準環の有限生成を得る。単なるnef性やgeneralized lc対への無条件の拡張ではない。
abstract_en: We give a twisted version of the Kawamata semi-positivity theorem by the $\mathbb{Q}$-line bundle with a vanishing Lelong number at every point. Moreover, we apply the result to the finite generation problem for canonical rings of Birkar's generalized pairs.
summary_en: ''
abstract_ja: 特異Hermitian計量の局所重みのLelong数が全点で消えるQ線束を加えた標準束公式を扱う。適切に準備された射の下で、基底のmoduli部分にも半正曲率かつLelong数零の計量を構成する。この半正値性をFujino–Mori型の議論と組み合わせ、高い双有理モデル上のnef部分が同じ計量条件を満たすgeneralized klt対の標準環の有限生成を示す。
abstract_source_url: https://arxiv.org/abs/2404.07401
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2404.07401v3](https://arxiv.org/abs/2404.07401)
- **著者:** Yoshinori Gongyo, Shigeharu Takayama
- **初回投稿日:** 2024-04-11
- **最終更新日:** 2025-12-05
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

標準束公式は、ファイブレーションの全空間の標準因子を、基底の標準因子、特異ファイバーに由来するdiscriminant部分、変動を担うmoduli部分へ分ける。川又の半正値性定理は、このmoduli部分の正値性を与える基本的な道具である。

本論文は全空間の標準因子にQ線束を加えた捩れた場合を扱う。捩れの線束には、半正曲率の特異Hermitian計量があり、その局所重みのLelong数がすべての点で零であることを仮定する。適切なtoroidalモデルでは、基底のmoduli部分にも同じ性質の計量が存在する。

この解析的な正値性を使い、generalized klt対の一般化標準環の有限生成を証明する。nef部分が高い滑らかな双有理モデル上で上述の計量をもつことが重要な仮定である。

結果は単なるnef性だけからの有限生成ではなく、generalized lc対への一般化も成り立たないと説明される。数値的な正値性に加えて、計量の特異性が弱いという条件が代数的な有限生成へ働く点に意義がある。

## 背景と問題設定

$f:X\to Y$を連結ファイバーをもつ射影多様体間の全射とし、$X$はquasi-smooth、$Y$は滑らかとする。被約因子$P=\sum\_jP\_j$、$Q=\sum\_lQ\_l$について$f^{-1}(Q)\subset P$、$f$は$Y\setminus\operatorname{Supp}Q$上で滑らかとする。

さらに$f:(X,P)\to(Y,Q)$がwell prepared、すなわちtoroidalかつ等次元であることを仮定する。Q因子$D=\sum\_jd\_jP\_j$は$d\_j<1$を満たすが、有効である必要はない。一般点$\eta$において

$$
\dim\_{\mathbb C(\eta)}\bigl(f\_\ast\mathcal O\_X(\lceil-D\rceil)\otimes\_{\mathcal O\_Y}\mathbb C(\eta)\bigr)=1
$$

とし、Q因子$L$に対して

$$
K\_X+D+M\sim\_{\mathbb Q}f^\ast(K\_Y+L)
$$

を仮定する。$M$の半正曲率計量と全点でのLelong数零が捩れに関する条件である。

## 主結果

### 捩れた川又半正値性（Theorem 1.1）

上の仮定の下で、標準束公式のmoduli部分$M\_Y$は、半正曲率をもち局所重みのLelong数が全点で零となる特異Hermitian計量を許す。特に$M\_Y$はnefである。

その部分は明示的に次のように定まる。$f^\ast Q\_l=\sum\_jw\_{lj}P\_j$と書き、$f(P\_j)=Q\_l$の成分に対し

$$
\bar d\_j=\frac{d\_j+w\_{lj}-1}{w\_{lj}},\qquad\delta\_l=\max\_{f(P\_j)=Q\_l}\bar d\_j,\qquad\Delta\_Y=\sum\_l\delta\_lQ\_l,\qquad M\_Y=L-\Delta\_Y
$$

とする。このとき$(Y,\Delta\_Y)$はsub-kltであり、

$$
K\_X+D+M\sim\_{\mathbb Q}f^\ast(K\_Y+\Delta\_Y+M\_Y)
$$

となる。$M=0$で$X$が滑らかな場合は従来の川又半正値性に対応するが、本定理では捩れが計量の特異性評価に追加の難しさを与える。

### 一般化標準環の有限生成（Theorem 1.3）

$(X,B+M)$をprojective generalized klt対とし、滑らかな高い双有理モデル$X'\to X$上のQ線束$M'$が、半正曲率で全点のLelong数が零となる特異Hermitian計量をもつとする。ある$l>0$について$l(K\_X+B+M)$がCartierならば、

$$
\bigoplus\_{m\geq0}H^0\bigl(X,ml(K\_X+B+M)\bigr)
$$

は有限生成な$\mathbb C$代数である。

対象がgeneralized kltであることと、$M'$の計量条件を併せて課している。Introductionはgeneralized lcの標準環では有限生成が一般に失敗すると指摘しており、その場合を本定理の範囲に含めてはならない。

## 証明の見取り図

半正値性では、Takayamaの先行する計量の特異性評価を捩れた設定へ拡張する。toroidalかつ等次元のモデルは局所的な特異性を制御するために必要で、Abramovich–Karuのtoroidalizationを用いた双有理修正がこの設定を用意する。捩れ$M$の寄与を評価し、moduli部分でLelong数が零のまま保たれることを示す。

有限生成については、$K\_X+B+M$がbigならば境界を摂動して通常のklt対へ帰着し、BCHMを適用できると説明される。一般の場合にはFujino–Moriの議論を使い、捩れた半正値性がその帰着に必要な正値性を供給する。generalized pairでのmoduli部分の一般的な関手性は未解決だが、この応用にはその全面的な解決を要しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2404.07401)
- **Introduction:** [PDF](https://arxiv.org/pdf/2404.07401v3) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorems 1.1 and 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2404.07401v3
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
