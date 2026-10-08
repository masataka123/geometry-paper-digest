---
layout: paper
title: Counterexamples to the Ambro--Kawamata effective non-vanishing conjecture
title_ja: Ambro–Kawamata有効非消滅予想に対する四次元反例
authors: Rahul Ajit
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  Let $k$ be an algebraically closed field of characteristic $0$ or $p\neq3$. We construct a terminal projective 4-fold $X$ and an ample Cartier divisor $D$ such that \[ 3K_X\sim0,\qquad D-K_X\ \text{is ample},\qquad H^0(X,D)=0. \] In char 0 this disproves the Ambro--Kawamata effective non-vanishing conjecture. From this example we construct a smooth projective 4-fold $Y$ with a semiample and big Cartier divisor $D_Y$ such that $D_Y-K_Y$ is basepoint-free and big and $H^0(Y,D_Y)=0$. We also give geometric variants and a separate terminal order 5 Jacobian quotient.
topic: algebraic-geometry
tags:
- singularities
- positivity
- calabi-yau-geometry
arxiv_id: 2610.09270v1
arxiv_url: https://arxiv.org/abs/2610.09270v1
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: |-
  Cartier因子DとD−Kの正値性を保ちながら、D自身には切断がない四次元多様体を構成する。terminalなアーベル多様体の有限商から出発し、滑らかな射影四次元多様体の例も得る。標数0ではAmbro–Kawamata有効非消滅予想への反例を与えるという主張である。
abstract_en: ''
summary_en: |-
  The paper separates positivity of a Cartier divisor from the existence of a section in its first multiple. A finite quotient of an abelian fourfold is used to make a line bundle descend while removing every invariant section. The resulting terminal example is accompanied by a smooth projective construction with semiample and big divisors. These are presented as counterexamples to effective non-vanishing in characteristic zero, with explicit Hilbert functions recording what happens for higher multiples.
abstract_ja: |-
  十分大きな倍数に切断があることと、因子自身に切断があることは異なる。本論文はこの違いを四次元で具体化し、標数0または3以外の代数閉体上で、標準因子が3倍で線形自明なterminal四次元多様体と、切断を持たない豊富Cartier因子を構成する。さらに滑らかな射影四次元多様体に移り、因子が半豊富かつbig、その随伴差が基点自由かつbigであっても、全てのコホモロジーが消える例を得る。これらの標数0の例は有効非消滅予想を否定するとされる。
abstract_source_url: https://arxiv.org/abs/2610.09270v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.09270v1](https://arxiv.org/abs/2610.09270v1)
- **著者:** Rahul Ajit
- **初回投稿日:** 2026-10-07
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

有効非消滅予想は、klt対の上でnefなCartier因子とその随伴差が十分正なら、その因子自身に非零切断があるはずだという予想である。基点自由定理などによって大きな倍数に切断があることは分かっても、最初の一倍に切断があることは別問題である。本論文は四次元でこの予想への反例を構成すると主張する。

最初の例は楕円曲線の四重積の位数3の商であり、特異点はterminalである。その上に、豊富なCartier因子でありながら切断を持たない因子を作る。構成の中心は、線束が商へ降りるためのファイバー上の条件と、その切断に不変ベクトルが存在する条件を分離することにある。

さらに固定点をブローアップしてから商を取ることにより、滑らかな射影四次元多様体の例を得る。この場合には因子は半豊富かつbigで、標準因子との差は基点自由かつbigとなる。滑らかさとこれらの正値性があっても一倍の非消滅には足りないというのが結果の意味である。以下はAbstractとIntroductionにおける主張の紹介であり、構成や証明全体の独立検証ではない。

## 背景と問題設定

<p>
IntroductionのConjecture 1.1では、完備正規複素多様体上のklt対 $(X,B)$、$B\ge0$、nef Cartier因子 $D$ に対し、$D-(K_X+B)$ がnefかつbigなら $H^0(X,\mathcal O_X(D))\ne0$ と予想する。既知の消滅定理は高次コホモロジーを消すが、Euler標数の正値性までは与えない。
</p>

<p>
Introductionは、Cartier条件を $\mathbb Q$-Cartier Weil条件へ弱めた反例は既知であると述べる。今回の構成の焦点は、Cartier条件を保持したまま一倍の切断を失わせることである。
</p>

## 主結果

### 豊富Cartier因子を持つterminal商（Theorem 1）

<p>
基礎体は代数閉で、標数は0または $p\ne3$ とする。Fermat楕円曲線 $E$ の位数3の自己同型 $\rho$ を四重積 $A=E^4$ に対角的に作用させる。商 $X=A/\langle\rho\rangle$ は、型 $\frac13(1,1,1,1)$ の特異点を $3^4$ 個持つterminal射影四次元多様体であり、$3K_X\sim0$ となる。
</p>

<p>
その上に豊富Cartier因子 $D$ が存在し、$D-K_X$ も豊富で、全ての整数 $m\ge1$ に対して次が成り立つ。
</p>

<div>
$$
h^0(X,mD)=3(m^4-1),\qquad
H^i(X,mD)=0\quad(i>0),\qquad D^4=72.
$$
</div>

<p>
特に $m=1$ では $H^0(X,D)=0$ である。標数0なら $B=0$ とした予想の仮定を満たしながら結論に反する。一方、$m\ge2$ では上式が正となり、大きな倍数の非消滅との違いが明示される。
</p>

### 滑らかな射影四次元の例（Theorem 2）

<p>
同じ標数条件の下で、滑らかな射影四次元多様体 $Y$ とCartier因子 $D_Y$ が存在し、$D_Y$ は半豊富かつbig、$D_Y-K_Y$ は基点自由かつbigである。それにもかかわらず、
</p>

<div>
$$
H^i(Y,D_Y)=0\quad(i\ge0).
$$
</div>

<p>
さらに全ての $m\ge1$ について $h^0(Y,mD_Y)=3(m^4-1)$、$i>0$ なら $H^i(Y,mD_Y)=0$ となる。ここで $D_Y-K_Y$ の豊富性までは主張されず、Introductionの脚注もその点を区別する。
</p>

## 証明の見取り図

有限群の位数が標数で可逆なとき、線形化された線束が商へ降りるには、各安定化群が対応するファイバーに自明に作用する必要がある。他方、降下後の切断は上の切断空間の群不変部分になる。この二つの条件の差を使う。

具体的には積の主偏極を次数9の同種写像で引き戻す。固定部分群上のファイバー指標を制御し、線束は降下する一方、9次元の切断空間には不変ベクトルがないようにする。滑らかな例では固定部分群をブローアップして線形系を解消し、例外因子に沿う持ち上げ作用が擬鏡映となることから商の滑らかさを得る。位数5の別構成や正次元族への将来の拡張も紹介されるが、後者は今後の共同研究として区別される。

## 原論文との対応

- **Abstractページ:** https://arxiv.org/abs/2610.09270v1
- **Introduction:** Section 1、pp. 1–3。
- **主要定理:** Theorems 1、2。比較対象はConjecture 1.1。
- **論文構成:** Sections 3–4がterminalな例、Section 5.1が滑らかな例。後続の証明・計算は確認範囲に含めない。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction
