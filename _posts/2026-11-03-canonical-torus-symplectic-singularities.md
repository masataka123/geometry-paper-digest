---
layout: paper
title: Canonical torus action on symplectic singularities
title_ja: シンプレクティック特異点の標準的なトーラス作用
authors: Yoshinori Namikawa, Yuji Odaka
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- hep-th
- math.DG
- math.RT
- math.SG
arxiv_abstract: We show that any symplectic singularity lying on a smoothable projective symplectic variety locally admits a good action of $(\mathbb{C}^*)^r$, which is canonical. Under mild assumptions, we actually prove such singularity germ is the cone vertex over a contact orbifold with weak K\"ahler-Einstein metric, forcing $r=1$. In particular, it admits a (canonical) good $\mathbb{C}^*$-action, which also extends to (canonical) actions of $\mathbb{H}^*\supset SU(2)$. These settle Kaledin's conjecture conditionally but in a substantially stronger form by establishing the canonicity, the extensibility of the action, for instance. Our key idea is to use the Donaldson-Sun theory on local K\"ahler metrics in complex differential geometry to connect with the theory of Poisson deformations of symplectic varieties. For general symplectic singularities, we prove the same assertions, assuming that the Donaldson-Sun theory extends to such singularities along with suitable singular (hyper)K\"ahler
  metrics. Conversely, our results can also be used to study the local behavior of such metrics around the germ.
topic: algebraic-geometry
tags:
- singularities
- symplectic-contact-geometry
- metric-limits
- kahler-einstein-metrics
- k-stability
arxiv_id: 2503.15791v4
arxiv_url: https://arxiv.org/abs/2503.15791
arxiv_submitted: '2025-03-20'
arxiv_updated: '2026-02-06'
summary: 平滑化可能な射影シンプレクティック多様体の特異点を、標準的なトーラス作用を持つ錐の頂点として記述する。Donaldson–Sunの計量接錐とPoisson変形を結び、追加条件のもとでは1次元トーラス作用と接触軌道体のKähler–Einstein幾何を得る。
abstract_en: We show that any symplectic singularity lying on a smoothable projective symplectic variety locally admits a good action of $(\mathbb{C}^*)^r$, which is canonical. Under mild assumptions, we actually prove such singularity germ is the cone vertex over a contact orbifold with weak K\"ahler-Einstein metric, forcing $r=1$. In particular, it admits a (canonical) good $\mathbb{C}^*$-action, which also extends to (canonical) actions of $\mathbb{H}^*\supset SU(2)$. These settle Kaledin's conjecture conditionally but in a substantially stronger form by establishing the canonicity, the extensibility of the action, for instance. Our key idea is to use the Donaldson-Sun theory on local K\"ahler metrics in complex differential geometry to connect with the theory of Poisson deformations of symplectic varieties. For general symplectic singularities, we prove the same assertions, assuming that the Donaldson-Sun theory extends to such singularities along with suitable singular (hyper)K\"ahler
  metrics. Conversely, our results can also be used to study the local behavior of such metrics around the germ.
summary_en: ''
abstract_ja: 平滑化可能な偏極射影シンプレクティック多様体上の特異点の解析的芽は、標準的な良いトーラス作用を持つアフィン・シンプレクティック錐の頂点の芽と同型になる。追加仮定のもとではトーラスの階数は1となり、作用は四元数の乗法群へも拡張する。一般のシンプレクティック特異点については、適切な特異超Kähler計量とDonaldson–Sun理論の適用を仮定した条件付きの結果である。証明は計量接錐への退化をPoisson変形として実現し、その剛性を用いる。
abstract_source_url: https://arxiv.org/abs/2503.15791
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2503.15791v4](https://arxiv.org/abs/2503.15791)
- **著者:** Yoshinori Namikawa, Yuji Odaka
- **初回投稿日:** 2025-03-20
- **最終更新日:** 2026-02-06
- **主分類・副分類:** math.AG（主分類）; hep-th, math.DG, math.RT, math.SG
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

シンプレクティック特異点は、正則部分の正則シンプレクティック形式が解消へ延長する特異点である。Kaledinの予想は、その解析的芽が良い1次元トーラス作用を持つ錐の頂点として記述できるかを問う。本論文は、射影的な大域条件のもとで標準的なトーラス作用を構成し、さらに条件を加えて階数1を導く。

得られる錐は単なる代数的な模型ではなく、特異Ricci平坦計量の計量接錐である。錐と作用が解析的芽だけから定まるという標準性が、存在だけを問う予想を強める。証明の核心は、Donaldson–Sunの2段階退化をPoisson変形として捉え直す点にある。

ただし、すべてのシンプレクティック特異点で予想を無条件に解決したわけではない。一般の局所的な特異点については、特異超Kähler計量とDonaldson–Sun退化データの存在を仮定する。トーラスの階数が1となることにも、別の条件が関わる。

## 背景と問題設定

正規代数多様体 $V$ の正則部分上のシンプレクティック形式が任意の解消へ正則2形式として延長するとき、$V$ をシンプレクティック多様体と呼ぶ。アフィン多様体上のトーラス作用が頂点 $0$ を固定し、任意の軌道の閉包が $0$ を含むとき、作用を良い作用と呼ぶ。形式がその作用に関して斉次なら、錐状のシンプレクティック多様体となる。

Kaledinの予想は、任意のシンプレクティック特異点の芽が良い $\mathbb C^\ast $ 作用を持つ錐の頂点の芽に同型であるという主張である。本論文はまず $T\simeq(\mathbb C^\ast )^r$ の作用を構成し、$r=1$ の問題を分離する。

## 主結果

### 標準的な錐とトーラス作用（Theorem 1.1）

偏極射影シンプレクティック多様体 $(\overline X,L)$ が、射影シンプレクティック解消を持つ、または偏極多様体として平滑化を持つとする。論文はこの二つの条件が同値であることも示す。このとき任意の点 $x\in\overline X$ で

$$
(\overline X,x)\simeq(C,0),\qquad
T\simeq(\mathbb C^\ast )^r,\quad r\geq1
$$

となる標準的なアフィン・シンプレクティック錐 $C$ と良い $T$ 作用を得る。

$C$ は特異超Kähler錐計量を持ち、計量の拡大縮小に対応する標準的な $\mathbb R\_{>0}$ 作用がある。この作用はLie群としての埋め込み $\mathbb R\_{>0}\hookrightarrow T$ による代数的トーラス作用の制限である。序論では、錐の代数構造と作用が選んだ計量ではなく解析的芽に依存することを強調する。

### 局所設定への条件付き拡張（Theorem 1.4）

一般のシンプレクティック特異点 $x\in X$ について、特異超Kähler計量 $g\_X$ と、その正則部分で平行な正則シンプレクティック形式を仮定する。さらに、その計量にDonaldson–Sun退化データが存在するというConjecture 1.3の条件を仮定する。このときTheorem 1.1と同じ標準的な錐・トーラス作用・拡大縮小作用を得る。

ここでは計量と退化データの存在は仮定であり、任意の芽で確立済みの事実ではない。大域的な平滑化の仮定を外す際、局所で選んだシンプレクティック形式の平行性も自動的には従わない。

### 階数1と接触幾何への帰結（Remarks 1.2, 1.6）

序論は、射影的設定で $b\_2(\overline X)\geq6$ の場合や、BBF形式について $c\_1(L)^\perp$ に非零等方的整数類がある場合などに $r=1$ を証明すると述べる。局所設定でも上記の計量仮定に加えて特異点が孤立している場合などに同じ結論を得る。一般の $r=1$ は予想として区別する。

適切な1次元トーラスによる商は、接触構造を持つklt log $\mathbb Q$-Fano対

$$
(F,\Delta),\qquad
\Delta=\sum\_i\left(1-\frac1{m\_i}\right)\Delta\_i
$$

を与える。$r=1$ の場合には、この対は錐特異性を持つKähler–Einstein計量を許容し、log K-polystableとなる。Abstractは作用の $\mathbb H^\ast \supset SU(2)$ への標準的拡張も述べる。これらは上の仮定を引き継ぐ帰結である。

### 孤立特異点での計量漸近（Theorem 1.5）

Theorem 1.1の設定で $x$ が孤立特異点なら、頂点近傍からの局所双正則写像 $\Psi:U\_C\to X$ と $\delta>0$ が存在し、

$$
|\Psi^\ast g\_X-g\_C|\_{g\_C}=O(r^\delta)
$$

が成り立つ。ここで $r$ は錐計量による頂点からの距離である。芽の同型に加え、計量が錐模型へ近づく定量的な速さを与える。

## 証明の見取り図

Donaldson–Sun理論の退化

$$
(x\in X)\rightsquigarrow(0\in W)\rightsquigarrow(0\in C)
$$

を二つのPoisson変形として実現する。第1段階ではReebベクトル場を1径数部分群で近似し、シンプレクティック形式の延長を示す。ここにはDiophantine近似と局所計量の解析が用いられる。第2段階でも斉次形式の延長を確保する。

Poisson変形理論の剛性により、第1段階は形式的な芽で自明となり、第2段階は錐自体の同型を与える。形式的Poisson同型をArtin近似によって解析的芽の同型へ移す。計量接錐の一意性と体積最小化が、構成された作用の標準性を支える。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2503.15791)
- **Introduction:** [PDF](https://arxiv.org/pdf/2503.15791v4) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.4, 1.5; Conjecture 1.3; Remarks 1.2, 1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2503.15791v4
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
