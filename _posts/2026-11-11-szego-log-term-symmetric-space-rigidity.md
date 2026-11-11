---
layout: paper
title: The Szegő log-term and local rigidity of Kähler--Einstein polarizations of compact Hermitian symmetric spaces
title_ja: Szegő核の対数項消滅と対称空間のKähler–Einstein偏極の局所剛性
authors: Andrea Loi, Matteo Palmieri, Fabio Zuddas
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: We prove local rigidity of the vanishing Szegő log-term for integral Kähler--Einstein polarizations of a product of irreducible compact Hermitian symmetric spaces. Near the invariant metric, vanishing of the log-term forces the Kähler form to lie in its biholomorphic orbit. The argument combines the first variation of the Kempf distortion function with a central-positioning procedure, reducing rigidity to polynomiality of spectral multipliers of the Laplace operator and the Berezin transform. For integral Kähler--Einstein polarizations, a common-pole obstruction then rules out all infinitesimal deformations transverse to the automorphism orbit.
topic: differential-geometry
tags:
- kahler-einstein-metrics
- curvature
arxiv_id: 2611.12708v1
arxiv_url: https://arxiv.org/abs/2611.12708
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: 既約コンパクトHermite対称空間の積を整数Kähler–Einstein偏極で偏極すると、不変計量近傍でSzegő核の対数項が消える計量の曲率は、正則自己同型によるものに限られる。Berezin変換のスペクトル乗数の極を用い、射影空間で知られた局所剛性を高階数・積の場合へ広げる。
abstract_en: We prove local rigidity of the vanishing Szegő log-term for integral Kähler--Einstein polarizations of a product of irreducible compact Hermitian symmetric spaces. Near the invariant metric, vanishing of the log-term forces the Kähler form to lie in its biholomorphic orbit. The argument combines the first variation of the Kempf distortion function with a central-positioning procedure, reducing rigidity to polynomiality of spectral multipliers of the Laplace operator and the Berezin transform. For integral Kähler--Einstein polarizations, a common-pole obstruction then rules out all infinitesimal deformations transverse to the automorphism orbit.
summary_en: ''
abstract_ja: コンパクトHermite対称空間の積上で、整数Kähler–Einstein偏極に対応する不変計量の局所剛性を調べる。Szegő核の対数項が消え、計量が所定の高階微分ノルムで十分近ければ、その曲率形式は不変形式と正則自己同型で同一視できる。Kempf歪み関数の変分と中心化を、Laplace作用素・Berezin変換のスペクトル的な多項式性の障害へ結び付ける。
abstract_source_url: https://arxiv.org/abs/2611.12708
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.12708v1](https://arxiv.org/abs/2611.12708)
- **著者:** Andrea Loi, Matteo Palmieri, Fabio Zuddas
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.DG（主分類）; math.CV
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

正のHermitian線束の双対の単位円周束上にはSzegő核があり、その境界での展開に対数項が現れる。等質な状況ではこの項が消える例が知られているが、対数項の消滅だけで元の計量がどこまで特定されるかは別の問題である。

Lu–Tianは射影空間の標準偏極について、不変計量の近くでは対数項消滅が正則自己同型を除いてFubini–Study計量を特徴付けることを示した。本論文はこの局所剛性を、既約コンパクトHermite対称空間の積とその整数Kähler–Einstein偏極へ拡張する。

一般の積偏極を無条件に扱うのではない。各因子のスケールをKähler–Einstein条件に合わせることが、Berezin固有値の極の相殺を排除するために重要となる。また結論は十分近い計量に関する局所的なものであり、すべての計量を分類する大域剛性を主張しない。

## 背景と問題設定

$M=\prod\_{k=1}^s M\_k$を既約コンパクトHermite対称空間の積、$n=\dim\_{\mathbb C}M$とする。各$M\_k$のPicard群の正の生成元を$L\_k$、不変計量を$h\_k$、非コンパクト双対のgenusを$\gamma\_k$とする。

$$
d=\gcd(\gamma\_1,\ldots,\gamma\_s),\qquad
L^{\mathrm{gcd}}=\boxtimes\_{k=1}^s L\_k^{\gamma\_k/d},\qquad
h^{\mathrm{gcd}}=\boxtimes\_{k=1}^s h\_k^{\gamma\_k/d}
$$

と置く。このとき$K\_M^{-1}\simeq(L^{\mathrm{gcd}})^d$で、$\omega^{\mathrm{gcd}}=\operatorname{Ric}(h^{\mathrm{gcd}})$はEinstein定数$d$のKähler–Einstein形式となる。

Szegő核を局所的に$\Pi=u\varpi^{-n-1}+v\log\varpi$と表したときの$v$が対数項である。本論文の$\operatorname{logterm}(h)\equiv0$は、円周束に沿って対数項が無限位数で消えることを意味する。単に一点で係数が零になるという条件ではない。

## 主結果

### 主定理：対数項消滅の局所剛性（Theorem 1.1）

上記の偏極に対して$\varepsilon(M)>0$が存在する。$h=e^\psi h^{\mathrm{gcd}}$が

$$
\operatorname{logterm}(h)\equiv0,\qquad
\Vert \psi\Vert \_{C^{2n+4}}<\varepsilon(M)
$$

を満たすなら、$M$の正則自己同型$f$が存在して

$$
f^\ast \operatorname{Ric}(h)=\omega^{\mathrm{gcd}}
$$

となる。結論は曲率形式の自己同型軌道への所属であり、線束計量を定数倍まで含めて一つの関数として固定するものではない。

$s=1$ではPicard群の正の生成元による各既約対称空間の局所剛性を与える。さらにIntroductionは、任意の正整数$q$に対する$(L^{\mathrm{gcd}})^q$の整数Kähler–Einstein偏極でも、右辺を$q\omega^{\mathrm{gcd}}$へ置き換えて同じ結論が成り立つと説明する。

## 証明の見取り図

解析的な還元はLu–Tianの方法を踏襲する。Kempf歪み関数の第一変分、Tian–Yau–Zelditch展開の係数のTaylor評価と楕円評価、定量的な中心化によって、局所剛性が破れれば定数と第一Laplace固有空間に直交する非零の滑らかな関数が生じる。その非零のisotypical成分には、スペクトル乗数が多項式であるという制約が課される。

新しい部分は、高階数の対称空間でも使えるスペクトル的障害である。射影空間の単項式基底による明示計算の代わりに、Laplace作用素とBerezin変換を対角化し、整数Kähler–Einstein偏極に対する共通の極が、定数・第一固有値以外のモードの多項式性を妨げることを示す。

この障害が解析的還元から生じた関数を排除し、矛盾を導く。因子のスケールを揃えない積では異なるgenusの因子間で極が相殺され得るため、偏極条件は証明に本質的である。原論文はその現象の例として$\mathbb {CP}^1\times\mathbb {CP}^3$にも言及する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.12708)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.12708v1) — Section 1, pp. 1–2（Section 2より前）
- **Introduction中で言及された主要結果:** Theorem 1.1; IntroductionによるRemark 9.2の説明
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.12708v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
